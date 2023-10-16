import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  // TODO: 'footer' to use translation function -- goal is to just have t('footer') and give it the href
  return (
    <div className="mt-8 rounded-bl-xl rounded-br-xl p-6 text-center">
      <p className="text-primary">
        {t('footer')}{' '}
        <a
          href="https://github.com/GetUsernameFromDatabase/GetUsernameFromDatabase.github.io"
          className="text-cyan-700 dark:text-cyan-200"
        >
          github
        </a>
      </p>
    </div>
  );
};

export default Footer;
