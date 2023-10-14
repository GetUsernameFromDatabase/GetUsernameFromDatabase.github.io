export interface SocialMediaLink {
  label: string;
  icon: React.ReactNode;
  className: string;
  link: string;
}

export interface ContactItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  className: string;
  link?: string;
}
