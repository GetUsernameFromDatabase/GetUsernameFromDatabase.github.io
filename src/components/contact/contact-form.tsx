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
      className="mx-auto rounded-lg bg-primary-foreground p-4 shadow-lg"
      action={`mailto:${properties.recipientEmail}`}
    >
      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-primary"
        >
          {t('forms.subject', { ns: 'common' })}:
        </label>
        <input
          type="text"
          name="subject"
          required
          className="w-full rounded-md border border-primary/20 bg-input p-2 text-primary focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="body"
          className="block text-sm font-semibold text-primary"
        >
          {t('forms.body', { ns: 'common' })}:
        </label>
        <textarea
          id="body"
          name="body"
          required
          className="h-32 w-full rounded-md border border-primary/20 bg-input p-2 text-primary focus:border-blue-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        title={t('forms.send-email-tooltip', { ns: 'common' })}
        className=" w-full rounded-md bg-primary py-2 font-semibold text-secondary hover:bg-primary/80 hover:shadow-md focus:outline-none"
      >
        {t('forms.send-email', { ns: 'common' })}
      </button>
    </form>
  );
};

export default ContactViaMailForm;
