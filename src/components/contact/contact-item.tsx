interface ContactItemProperties {
  icon: React.ReactNode;
  title: string;
  link: string;
  text: string;
}

const ContactItem: React.FC<ContactItemProperties> = ({ ...properties }) => {
  // TODO: make the whole thing have href yet with selectable text
  return (
    <div className="flex items-center gap-4">
      {properties.icon}
      <div>
        <h3 className="pb-2 text-xl font-semibold dark:text-white">
          {properties.title}
        </h3>
        <p className="inline-flex flex-col gap-1">
          <a
            className="text-gray-lite text-lg dark:text-[#A6A6A6]"
            href={properties.link}
          >
            {properties.text}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactItem;
