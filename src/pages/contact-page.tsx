import { useTranslation } from 'react-i18next';

import ContactViaMailForm from '../components/contact/contact-form';
import ContactInfo from '../components/contact/contact-info';
import { personalInfo } from '../info/personal';

import PageWrapper from '@/components/page/page-wrapper';
import { capitalizeWords } from '@/utils/string-manipulation';

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper title={capitalizeWords(t('contact-page.title'))}>
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
    </PageWrapper>
  );
};

export default ContactPage;
