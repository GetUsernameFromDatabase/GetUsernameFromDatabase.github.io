import { DateTime } from 'luxon';

export const myKnowledges = [
  'TypeScript',
  'React',
  'Node.js',
  'C#',
  'Java',
  'Nuxt.js',
  'Delphi',
  'PHP',
  'JavaScript',
  'MySQL',
  'Linux',
  'Oracle SQL',
  'CSS',
] as const;
export interface MyCertificate {
  title: string;
  issuer: string;
  issued: DateTime;
  credentialID: string;
  link: string;
  linkToFile?: string;
}
export const myCertificates: MyCertificate[] = [
  {
    title: 'SQL (Basic)',
    issuer: 'HackerRank', // TODO: maybe at some point have issuer seperately and also add more information (icon, link)
    issued: DateTime.fromISO('2021-06-12'),
    credentialID: '0C143E663373',
    link: 'https://www.hackerrank.com/certificates/0c143e663373',
  },
  {
    title: 'CSS (Cascading Style Sheets)',
    issuer: 'HackerRank',
    issued: DateTime.fromISO('2021-05-11'),
    credentialID: '5FB61022C06F',
    link: 'https://www.hackerrank.com/certificates/5fb61022c06f',
  },
  {
    title: 'JavaScript (Basic)',
    issuer: 'HackerRank',
    issued: DateTime.fromISO('2021-04-29'),
    credentialID: 'D78D35D3D39C',
    link: 'https://www.hackerrank.com/certificates/d78d35d3d39c',
  },
  {
    title: 'C# (Basic)',
    issuer: 'HackerRank',
    issued: DateTime.fromISO('2020-12-09'),
    credentialID: 'D4D4AA43BDC4',
    link: 'https://www.hackerrank.com/certificates/d4d4aa43bdc4',
  },
  {
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    issued: DateTime.fromISO('2020-12-09'),
    credentialID: '264CD361DAFD',
    link: 'https://www.hackerrank.com/certificates/264cd361dafd',
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    issued: DateTime.fromISO('2020-12-09'),
    credentialID: 'CE35C1EAFC90',
    link: 'https://www.hackerrank.com/certificates/ce35c1eafc90',
  },
  {
    title: 'C1 Advanced - Score 196',
    issuer: 'Cambridge University Press & Assessment English',
    issued: DateTime.fromISO('2019-06-06'),
    credentialID: '196EE0072365',
    link: 'https://www.cambridgeenglish.org/why-choose-us/higher-education-institutions/how-to-verify-results-online/',
    linkToFile: '/certificates/CAE-C1.pdf',
  },
];
