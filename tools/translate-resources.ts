/* eslint-disable security/detect-object-injection */
/* eslint-disable security/detect-non-literal-fs-filename */
import fs from 'node:fs'; // Using fs.promises for asynchronous file operations
import path from 'node:path';

import translate from 'translate';

interface LocaleFile {
  path: string;
  lang: string;
}

interface TranslationFile {
  [key: string]: string | TranslationFile;
}

const suppliedArguments: string[] = process.argv.slice(2);

function parseArgument(index: number, defaultArgument: string) {
  if (!suppliedArguments[index]) {
    console.warn(
      `${index}. argument not supplied. Using default argument ${defaultArgument}.\n`,
    );
  }
  return suppliedArguments[index] ?? defaultArgument;
}

function parseArguments() {
  console.log('==============================================');
  console.log('--- PARSING ARGUMENTS ---');
  const cwd = process.cwd();
  const resourcesPath = path.join(
    cwd,
    parseArgument(0, './src/plugins/i18n/resources'),
  );
  const sourceLocalePath = path.join(
    resourcesPath,
    parseArgument(1, 'en.json'),
  );
  console.log('----------------------------------------------');
  console.log(`Target Locales Path: ${resourcesPath}`);
  console.log(`Main Locale: ${sourceLocalePath}`);
  console.log('==============================================');
  return { resourcesPath, sourceLocalePath };
}

async function getJsonFilesFromDirectory(
  directory: string,
): Promise<LocaleFile[]> {
  const files: LocaleFile[] = [];

  const dirents = fs.readdirSync(directory, { withFileTypes: true });

  for (const dirent of dirents) {
    const filePath = path.join(directory, dirent.name);
    if (dirent.isFile() && dirent.name.endsWith('.json')) {
      files.push({
        path: filePath,
        lang: dirent.name.replace('.json', ''),
      });
    }
  }

  return files;
}

async function translateFile(file: TranslationFile, locale: LocaleFile) {
  const translatedResources: TranslationFile = {};

  const eachCurrentLevel = async (
    object: TranslationFile,
    parentKey: string,
  ) => {
    for (const key in object) {
      const value = object[key];
      const nextParent = parentKey ? `${parentKey}.${key}` : key;
      if (typeof value === 'string') {
        const translationOptions = {
          to: locale.lang || 'en',
        };
        translatedResources[`${nextParent}`] = await translate(
          value,
          translationOptions,
        );
      } else if (typeof value === 'object') {
        await eachCurrentLevel(value, `${nextParent}`);
      }
    }
  };
  await eachCurrentLevel(file, '');

  const parseObjectLevel: TranslationFile = {};
  for (const key in translatedResources) {
    const value = translatedResources[key];
    const keySplit = key.split('.');
    const keyLevel = keySplit.length;

    let currentParent = parseObjectLevel;
    for (let index = 0; index < keyLevel; index++) {
      const currentKey = keySplit[index];
      if (!currentParent[currentKey]) currentParent[currentKey] = {};
      if (index === keyLevel - 1) currentParent[currentKey] = value;
      currentParent = currentParent[currentKey] as TranslationFile;
    }
  }

  return parseObjectLevel;
}

async function getFilesToTranslate(
  resourcesPath: string,
  sourceLocalePath: string,
) {
  const listLocaleToTranslate = await getJsonFilesFromDirectory(resourcesPath);

  const sourceLocaleIndex = listLocaleToTranslate.findIndex(
    (localeFile) => localeFile.path === sourceLocalePath,
  );
  listLocaleToTranslate.splice(sourceLocaleIndex, 1);

  console.log(
    `--- LOCALES TO TRANSLATE: ${listLocaleToTranslate.map(
      (localeFile) => localeFile.lang,
    )}`,
  );
  return listLocaleToTranslate;
}

async function main() {
  const { resourcesPath, sourceLocalePath } = parseArguments();
  const listLocaleToTranslate = await getFilesToTranslate(
    resourcesPath,
    sourceLocalePath,
  );

  const fileContent = fs.readFileSync(sourceLocalePath, 'utf8');
  const file: TranslationFile = JSON.parse(fileContent);

  // @ts-expect-error engine does exist in translate -- https://www.npmjs.com/package/translate#engines
  console.log(`Starting translation with "${translate.engine}" engine...`);

  for (const locale of listLocaleToTranslate) {
    console.log(`Translating ${locale.lang}... ${locale.path}`);
    try {
      const t = await translateFile(file, locale);
      fs.writeFileSync(locale.path, JSON.stringify(t, null, 2));
    } catch (error) {
      console.error(error);
    }
  }
  console.log(`TRANSLATION FINISHED`);
}

await main();
