/* eslint-disable tailwindcss/no-custom-classname */
import type { ReactNode } from 'react';

import ModalAddUser from '@/layouts/ModalAddUser';
import type { NavbarProps } from '@/layouts/Navbar';
import { Navbar } from '@/layouts/Navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  navbar: NavbarProps;
};

const Main = (props: IMainProps) => {
  return (
    <div className=" w-full bg-gray-400 px-1 text-gray-700 antialiased">
      {props.meta}
      <Navbar navbarData={props.navbar.navbarData} />
      <div className="mx-auto min-h-[calc(100vh-100px)] max-w-screen-md bg-white px-1 ">
        <main className="content text-xl">{props.children}</main>
      </div>
      <ModalAddUser />
    </div>
  );
};

export { Main };
