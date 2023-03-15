export type LinkData = { href: string; title: string };

export const notAuthorizedLinks: LinkData[] = [
  {
    href: '/resume/edit',
    title: 'Составить резюме',
  },
  {
    href: '/about',
    title: 'О сервисе',
  },
  {
    href: '/authorization',
    title: 'Войти',
  },
];

export const authorizedLinks: LinkData[] = notAuthorizedLinks.slice(0, 2);
