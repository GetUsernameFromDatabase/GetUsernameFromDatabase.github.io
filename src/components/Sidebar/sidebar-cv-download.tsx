import { useTranslation } from 'react-i18next';
import { AiOutlineDownload } from 'react-icons/ai';

const SidebarCvDownload = () => {
  // TODO: cv system better -- currently not even properly translated
  const cvHref = '/cv-en.pdf';
  const { t } = useTranslation();

  return (
    <div className="mt-10 text-center">
      <a
        href={cvHref}
        className="inline-flex items-center gap-2 rounded-[60px] bg-secondary px-6 py-3 text-primary hover:bg-secondary/80"
      >
        <AiOutlineDownload />
        {t('download-cv', { ns: 'common' })}
      </a>
    </div>
  );
};

export default SidebarCvDownload;
