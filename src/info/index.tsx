// as index.ts so I can segment it if it gets too long or I'd like another use for info
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsGithub, BsJournalText, BsTelephoneOutbound } from 'react-icons/bs';
import { FaFacebookF, FaHackerrank } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';

import type { ContactItem, SocialMediaLink } from '../../@types/info';

export const personalInfo = {
  name: 'Ryan Murulo',
  avatar: 'https://avatars.githubusercontent.com/u/49920260?v=4',
  email: 'rkruberg@gmail.com',
  location: 'Estonia/Tartu',
  phone: '+372 5388 9416',
  birthday: 'July 25, 2001', // TODO: make this into a date object
  linkedin: 'https://www.linkedin.com/in/ryan-murulo-415852147/',
  facebook: 'https://www.facebook.com/Ryanuskas/',
  github: 'https://github.com/GetUsernameFromDatabase',
  hackerrank: 'https://www.hackerrank.com/rkruberg',
} as const;

export const socialMediaLinks: Readonly<SocialMediaLink[]> = [
  {
    label: 'Facebook',
    icon: FaFacebookF,
    className: 'text-[#1773EA]',
    link: personalInfo.facebook,
  },
  {
    label: 'GitHub',
    icon: BsGithub,
    className: 'text-[#2e3440]',
    link: personalInfo.github,
  },
  {
    label: 'HackerRank',
    icon: FaHackerrank,
    className: 'text-[#32c766]',
    link: personalInfo.hackerrank,
  },
  {
    label: 'LinkedIn',
    icon: RiLinkedinFill,
    className: 'text-[#0072b1]',
    link: personalInfo.linkedin,
  },
];

export const contactItems: Readonly<ContactItem[]> = [
  {
    label: 'Phone',
    icon: BsTelephoneOutbound,
    value: personalInfo.phone,
    link: `tel:${personalInfo.phone}`,
    className: 'text-cyan-500',
  },
  {
    label: 'Location',
    icon: BiMap,
    value: personalInfo.location,
    className: 'text-[#6AB5B9]',
  },
  {
    label: 'E-mail',
    icon: BsJournalText,
    value: personalInfo.email,
    link: `mailto:${personalInfo.email}`,
    className: 'text-[#FD7590]',
  },
  {
    label: 'Birthday',
    icon: AiOutlineCalendar,
    value: personalInfo.birthday,
    className: 'text-[#C17CEB]',
  },
] as const;
