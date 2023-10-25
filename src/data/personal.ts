// as index.ts so I can segment it if it gets too long or I'd like another use for info
import { DateTime } from 'luxon';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsGithub, BsJournalText, BsTelephoneOutbound } from 'react-icons/bs';
import { FaFacebookF, FaHackerrank } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';

import type { ContactItem, SocialMediaLink } from '@type/my-types';

export const personalInfo = {
  names: {
    current: 'Ryan Murulo',
    previous: 'Ryan Kruberg',
    linkedin: 'ryan-murulo-415852147',
    facebook: 'Ryanuskas',
    github: 'GetUsernameFromDatabase',
    hackerrank: 'rkruberg',
  },
  nameBefore: 'Ryan Kruberg', // TODO: use this
  avatar: 'https://avatars.githubusercontent.com/u/49920260?v=4',
  email: 'rkruberg@gmail.com',
  location: 'Estonia/Tartu',
  phone: '+372 5388 9416',
  birthday: DateTime.fromISO('2001-07-25'),
} as const;

const myRootLinks = {
  linkedin: `https://www.linkedin.com/in/${personalInfo.names.linkedin}`,
} as const;

export const linksConnectedToMe = {
  linkedIn: {
    main: myRootLinks.linkedin,
    certifications: `${myRootLinks.linkedin}/details/certifications/`,
    skills: `${myRootLinks.linkedin}/details/skills/`,
  },
  facebook: 'https://www.facebook.com/Ryanuskas',
  github: `https://github.com/${personalInfo.names.github}`,
  hackerrank: `https://www.hackerrank.com/${personalInfo.names.hackerrank}`,
} as const;

export const socialMediaLinks: Readonly<SocialMediaLink[]> = [
  {
    label: 'Facebook',
    icon: FaFacebookF,
    className: 'text-[#1773EA]',
    link: linksConnectedToMe.facebook,
  },
  {
    label: 'GitHub',
    icon: BsGithub,
    className: 'text-[#2e3440]',
    link: linksConnectedToMe.github,
  },
  {
    label: 'HackerRank',
    icon: FaHackerrank,
    className: 'text-[#32c766]',
    link: linksConnectedToMe.hackerrank,
  },
  {
    label: 'LinkedIn',
    icon: RiLinkedinFill,
    className: 'text-[#0072b1]',
    link: linksConnectedToMe.linkedIn.main,
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
    value: personalInfo.birthday.toLocaleString(),
    className: 'text-[#C17CEB]',
  },
] as const;
