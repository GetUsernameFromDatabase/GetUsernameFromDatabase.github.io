import ContactViaMailForm from '../components/contact/contact-form';
import ContactInfo from '../components/contact/contact-info';
import { personalInfo } from '../info';

const ContactPage = () => {
  return (
    <div className="mt-8 px-12 pt-16">
      <div>
        <h2 className="after:contents[] relative -translate-y-1/2 font-roboto-slab text-4xl font-bold text-slate-900 after:absolute after:left-52 after:right-8 after:top-1/2 after:h-[2px] after:w-36 after:bg-primary dark:text-slate-50">
          Contact
        </h2>
      </div>
      <ContactInfo
        phone={personalInfo.phone}
        email={personalInfo.email}
      ></ContactInfo>

      <div className="pt-6 lg:pt-10">
        <h3 className="mb-4 font-roboto-slab text-2xl font-bold text-slate-900 dark:text-slate-50">
          Feel free to send me an e-mail
        </h3>
        <ContactViaMailForm
          recipientEmail={personalInfo.email}
        ></ContactViaMailForm>
      </div>
    </div>
  );
};

export default ContactPage;
