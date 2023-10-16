/* eslint-disable security/detect-object-injection */
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { type AvailableLanguage, languages } from '@/plugins/i18n';

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = async (language: AvailableLanguage) => {
    await i18n.changeLanguage(language);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          {languages[i18n.language].icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          {t('languages.available-languages')}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {Object.keys(languages).map((key, index) => {
            const language = languages[key];
            return (
              <DropdownMenuItem
                key={index}
                onClick={() => handleLanguageChange(key as AvailableLanguage)}
                data-type={key}
              >
                {language.icon}
                <span className="ml-2">{t(language.translationKey)}</span>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSwitcher;
