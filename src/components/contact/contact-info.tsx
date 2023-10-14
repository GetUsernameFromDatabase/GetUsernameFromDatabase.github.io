import { BiMailSend, BiSolidPhoneCall } from 'react-icons/bi';

import ContactItem from './contact-item';

interface ContactInfoProperties {
  phone: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProperties> = ({ ...properties }) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <ContactItem
        title="Phone"
        icon={<BiSolidPhoneCall className="h-10 w-10 text-[#144d61]" />}
        link={`tel:${properties.phone}`}
        text={properties.phone}
      />
      <ContactItem
        title="E-mail"
        icon={<BiMailSend className="h-10 w-10 text-[#ffa403]" />}
        link={`mailto:${properties.email}`}
        text={properties.email}
      />
    </div>
  );
};

export default ContactInfo;
