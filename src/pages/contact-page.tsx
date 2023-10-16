import { useTranslation } from 'react-i18next';

import ContactViaMailForm from '../components/contact/contact-form';
import ContactInfo from '../components/contact/contact-info';
import { personalInfo } from '../info';

const ContactPage = () => {
  // TODO: fix ` ` becoming + -- prolly url encoding issue
  const { t } = useTranslation();
  return (
    <div className="mt-8 px-12 pt-16">
      <div>
        <h2 className="after:contents[] font-roboto-slab relative -translate-y-1/2 text-4xl font-bold text-primary after:absolute after:left-52 after:right-8 after:top-1/2 after:h-[2px] after:w-36 after:bg-primary">
          {t('contact-page.title')}
        </h2>
      </div>
      <ContactInfo
        phone={personalInfo.phone}
        email={personalInfo.email}
      ></ContactInfo>

      <div className="pt-6 lg:pt-10">
        <h3 className="font-roboto-slab mb-4 text-2xl font-bold text-primary/90">
          {t('contact-page.contact-me')}
        </h3>
        <ContactViaMailForm
          recipientEmail={personalInfo.email}
        ></ContactViaMailForm>
      </div>
    </div>
  );
};

export default ContactPage;
