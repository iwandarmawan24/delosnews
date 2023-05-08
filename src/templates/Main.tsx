import type { ReactNode } from 'react';

import type { NavbarProps } from '@/layouts/Navbar';
import { Navbar } from '@/layouts/Navbar';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  navbar: NavbarProps;
};

const Main = (props: IMainProps) => (
  <div className=" w-full bg-gray-400 px-1 text-gray-700 antialiased">
    {props.meta}
    <Navbar navbarData={props.navbar.navbarData} />
    <div className="mx-auto min-h-[calc(100vh-100px)] max-w-screen-md bg-white px-1 ">
      <main className="content text-xl">{props.children}</main>
      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
        {/*
         * PLEASE READ THIS SECTION
         * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
         */}
      </footer>
    </div>
  </div>
);

export { Main };
