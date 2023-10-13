// as index.ts so I can segment it if it gets too long or I'd like another use for info
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaHackerrank } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';

export const personalInfo = {
  name: 'Ryan Murulo',
  profession: 'Software Developer',
  email: 'rkruberg@gmail.com',
  location: 'Estonia/Tartu',
  phone: '+372 5388 9416',
  birthday: 'July 25, 2001', // TODO: make this into a date object
  linkedin: 'https://www.linkedin.com/in/ryan-murulo-415852147/',
  facebook: 'https://www.facebook.com/Ryanuskas/',
  github: 'https://github.com/GetUsernameFromDatabase',
  hackerrank: 'https://www.hackerrank.com/rkruberg',
} as const;

// customClass is used to deal with vite + tailwindcss problem where
//  vite does not compile css for text-[#1773EA]
export const socialMediaLinks = [
  {
    name: 'Facebook',
    icon: <FaFacebookF />,
    customClass: 'text-[#1773EA]',
    link: personalInfo.facebook,
  },
  {
    name: 'GitHub',
    icon: <BsGithub />,
    customClass: 'text-[#2e3440]',
    link: personalInfo.github,
  },
  {
    name: 'HackerRank',
    icon: <FaHackerrank />,
    customClass: 'text-[#32c766]',
    link: personalInfo.hackerrank,
  },
  {
    name: 'LinkedIn',
    icon: <RiLinkedinFill />,
    customClass: 'text-[#0072b1]',
    link: personalInfo.linkedin,
  },
] as const;
