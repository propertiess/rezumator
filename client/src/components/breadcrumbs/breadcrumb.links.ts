import { LinkData, notAuthorizedLinks } from '@/screens/home/navbar/links.data';

export const breadcrumbLinks: LinkData[] = [
  notAuthorizedLinks[0],
  { title: 'Резюме', href: '/resume-view' },
];
