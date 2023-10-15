import { useTranslation } from 'react-i18next';

interface ContactViaMailFormProperties {
  recipientEmail: string;
}

const ContactViaMailForm: React.FC<ContactViaMailFormProperties> = ({
  ...properties
}) => {
  const { t } = useTranslation();
  return (
    <form
      className="mx-auto rounded-lg bg-white p-4 shadow-lg dark:bg-[#1f1f1f]"
      action={`mailto:${properties.recipientEmail}`}
    >
      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-gray-700 dark:text-slate-100"
        >
          {t('forms.subject', { ns: 'common' })}:
        </label>
        <input
          type="text"
          name="subject"
          required
          className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none dark:bg-slate-200"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="body"
          className="block text-sm font-semibold text-gray-700 dark:text-slate-100"
        >
          {t('forms.body', { ns: 'common' })}:
        </label>
        <textarea
          id="body"
          name="body"
          required
          className="h-32 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none dark:bg-slate-200"
        />
      </div>
      <button
        type="submit"
        title={t('forms.send-email-tooltip', { ns: 'common' })}
        className="w-full rounded-md bg-primary py-2 font-semibold text-white hover:bg-primary-dark hover:shadow-md focus:outline-none dark:bg-primary-dark dark:hover:bg-primary"
      >
        {t('forms.send-email', { ns: 'common' })}
      </button>
    </form>
  );
};

export default ContactViaMailForm;
