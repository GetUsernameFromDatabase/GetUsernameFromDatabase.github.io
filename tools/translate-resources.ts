/* eslint-disable security/detect-object-injection */
/* eslint-disable security/detect-non-literal-fs-filename */
import fs from 'node:fs';
import path from 'node:path';

import translate from 'translate';

// TODO: find out a way to have Trans Component fully working with this
// Currently {{}} seems to work fine but <l> gets wiped out
// https://react.i18next.com/latest/trans-component

interface LocaleFile {
  path: string;
  lang: string;
}
type TranslationSource =
  | string
  | string[]
  | { [key: string | number]: TranslationSource }
  | TranslationSource[];

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

async function translateObject(
  initialSource: TranslationSource,
  locale: LocaleFile,
) {
  async function recursiveTranslator(
    source: TranslationSource,
  ): Promise<TranslationSource> {
    const currentLevel: TranslationSource = {};

    switch (typeof source) {
      case 'string': {
        // ! translation options object is used for caching
        // ! make sure new object is given to translate
        const translated = await translate(source, { to: locale.lang ?? 'en' });
        return translated;
      }
      case 'object': {
        if (Array.isArray(source)) {
          return Promise.all(
            source.map((element) => recursiveTranslator(element)),
          );
        }

        for (const key in source) {
          currentLevel[key] = await recursiveTranslator(source[key]);
        }
        return currentLevel;
      }
      default: {
        console.error(`Will not process type ${typeof source}:`, source);
      }
    }
    return currentLevel;
  }
  return await recursiveTranslator(initialSource);
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
  const file: TranslationSource = JSON.parse(fileContent);

  // @ts-expect-error engine does exist in translate -- https://www.npmjs.com/package/translate#engines
  console.log(`Starting translation with "${translate.engine}" engine...`);

  for (const locale of listLocaleToTranslate) {
    console.log(`Translating ${locale.lang} | ${locale.path}`);
    try {
      const translatedObject = await translateObject(file, locale);
      const jsonString = JSON.stringify(translatedObject, null, 2);
      fs.writeFileSync(locale.path, jsonString);
    } catch (error) {
      console.error(error);
    }
  }
  console.log(`TRANSLATION FINISHED`);
}

await main();
