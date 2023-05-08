import type { NavbarProps } from '@/layouts/Navbar';

type NavbarDataProps = NavbarProps['navbarData'];
const NAVBAR_DATA: NavbarDataProps = [
  {
    name: 'List Articles',
    key: 'list-articles',
    link: '/',
  },
  {
    name: 'Bought Articles',
    key: 'bought-articles',
    link: '/bought-articles',
  },
  {
    name: 'Lucky Weels',
    key: 'lucky-weels',
    link: '/lucky-weels',
  },
  {
    name: 'My Account',
    key: 'my-account',
    link: '/account',
  },
];

export default NAVBAR_DATA;
