interface ContactViaMailFormProperties {
  recipientEmail: string;
}

const ContactViaMailForm: React.FC<ContactViaMailFormProperties> = ({
  ...properties
}) => {
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
          Subject:
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
          Body:
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
        className="hover:bg-primary-dark dark:bg-primary-dark w-full rounded-md bg-primary py-2 font-semibold text-white hover:shadow-md focus:outline-none dark:hover:bg-primary"
      >
        Send Email
      </button>
    </form>
  );
};

export default ContactViaMailForm;
