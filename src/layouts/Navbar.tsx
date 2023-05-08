import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type NavbarProps = {
  navbarData: {
    key: string;
    name: string;
    link: string;
  }[];
};

const Navbar = (props: NavbarProps) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { navbarData } = props;
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 90) ||
        currentScrollPos < 1
    );

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className="sticky top-0 z-30 mx-auto flex max-w-screen-md  flex-col bg-white px-1 transition-all	duration-300 ease-in">
      <img
        src={`${router.basePath}/assets/images/delos_logo.png`}
        alt="Delosnews logo"
        className={`m-4 w-[150px] self-center transition-all duration-300 ease-in ${
          visible ? '' : 'mt-[-30px]'
        }`}
      />
      <ul className="flex flex-row items-center justify-between border-t-4 border-double	border-black p-2 transition-all duration-100 ease-in">
        {navbarData.map((data) => (
          <li key={data.key}>
            <div
              onClick={() => router.push(`/${data.link}`)}
              onKeyPress={() => router.push(`/${data.link}`)}
              role="button"
              tabIndex={0}
              className={`cursor-pointer text-sm ${
                pathname === data.link ? 'font-bold' : ''
              }`}
            >
              {data.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export type { NavbarProps };
export { Navbar };
