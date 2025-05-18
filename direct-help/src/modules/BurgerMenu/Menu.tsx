import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Link } from '@/i18n/navigation';
import clsx from 'clsx';
import { FC, RefObject } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export interface MenuProps {
  menuRef: RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  closeMenu: () => void;
}

const Menu: FC<MenuProps> = ({ closeMenu, isOpen, menuRef }) => {
  const t = useTranslations('burger');
  const menuCN = clsx(
    'fixed top-0 right-0 h-dvh w-full bg-[#FDF9F0] pb-25 z-40 transition-transform duration-300 ease-in-out',
    {
      ['translate-y-0']: isOpen,
      ['-translate-y-full']: !isOpen,
    }
  );
  return (
    <div ref={menuRef} className={menuCN}>
      <header className="xs:pt-3 xs:pb-3 relative flex w-full justify-center bg-[#79a1d6] pt-[9px] pb-[9px] sm:pt-4 sm:pb-4 md:pt-5 md:pb-5 lg:pt-[26px] lg:pb-[26px] min-xl:pt-[32px] min-xl:pb-[47px]">
        <div className="wrapper flex justify-between max-lg:items-center">
          <button onClick={closeMenu} className="relative">
            <Image
              src="/icons/cancel.svg"
              alt="menu open icon"
              width={24}
              height={17}
            />
          </button>
          <Link
            href={'/'}
            className="max-lg:absolute max-lg:top-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:-translate-y-1/2"
          >
            <Image
              src="/logo.svg"
              alt="logo"
              width={71}
              height={30}
              className="aspect-[2.37] w-15 min-[375px]:w-[clamp(4.438rem,3.426rem+4.314vw,6.188rem)] lg:w-[clamp(6.188rem,0.034rem+9.615vw,8.688rem)] min-2xl:w-[139px]"
            />
          </Link>
          <div className="flex gap-[45px] lg:pt-[15px] xl:pt-[23px]">
            <LocaleSwitcher />
          </div>
        </div>
      </header>
      <nav className="flex max-h-[calc(100dvh-50px)] flex-col gap-4 overflow-y-auto p-6">
        <Link
          className="px-2 py-1 text-xl text-[#2F2D2D]"
          onClick={closeMenu}
          href="/"
        >
          {t('home')}
        </Link>
        <Link
          className="px-2 py-1 text-xl text-[#2F2D2D]"
          onClick={closeMenu}
          href="/reporting"
        >
          {t('reporting')}
        </Link>
        <Link
          className="px-2 py-1 text-xl text-[#2F2D2D]"
          onClick={closeMenu}
          href="/about"
        >
          {t('about')}
        </Link>
        <Link
          className="px-2 py-1 text-xl text-[#2F2D2D]"
          onClick={closeMenu}
          href="/support"
        >
          {t('support')}
        </Link>
        <Link
          className="px-2 py-1 text-xl text-[#2F2D2D]"
          onClick={closeMenu}
          href="/new-partner"
        >
          {t('partners')}
        </Link>
        <a
          className="mt-5 p-1 text-xl font-light text-[#2F2D2D]"
          onClick={closeMenu}
          href="tel:+380939556041"
        >
          +380939556041
        </a>
        <a
          className="p-1 text-xl font-light text-[#2F2D2D]"
          onClick={closeMenu}
          href="tel:+380958418091"
        >
          +380958418091
        </a>
      </nav>
    </div>
  );
};

export default Menu;
