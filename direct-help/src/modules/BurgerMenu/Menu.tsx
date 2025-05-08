import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import { FC, RefObject } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export interface MenuProps {
  menuRef: RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  closeMenu: () => void;
}

const Menu: FC<MenuProps> = ({ closeMenu, isOpen, menuRef }) => {
  const t = useTranslations('burger');
    const menuCN = clsx('fixed top-0 right-0 h-fit w-full bg-[#FDF9F0] pb-25 z-40 transition-transform duration-300 ease-in-out', {
      ['translate-y-0']: isOpen,
      ['-translate-y-full']: !isOpen
    })
  return (
    <div ref={menuRef} className={menuCN}>
      <header className="w-full relative pt-[7px] pb-[11px] xs:pt-3 xs:pb-3 sm:pt-4 sm:pb-4 md:pt-5 md:pb-5 lg:pt-[26px] lg:pb-[26px]  min-xl:pt-[32px] min-xl:pb-[47px] flex justify-center bg-[#79a1d6]">
        <div className="wrapper flex justify-between max-lg:items-center">
          <button onClick={closeMenu} className="relative">
            <Image src='/icons/cancel.svg' alt="menu open icon" width={24} height={17} />
          </button>
          <Link href={'/'} className="max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-1/2 max-lg:-translate-y-1/2">
            <Image src='/logo.svg' alt="logo" width={50} height={21} className="xs:w-[clamp(3.125rem,-1.783rem+16.36vw,8.688rem)] xs:h-[clamp(1.313rem,-0.728rem+6.801vw,3.625rem)] min-2xl:w-[139px] min-2xl:h" />
          </Link>
          <div className="flex gap-[45px] lg:pt-[15px] xl:pt-[23px]">
            <LocaleSwitcher />
          </div>
        </div>
      </header>
      <nav className="p-6 flex flex-col gap-4">
        <Link className="text-xl text-[#2F2D2D] py-1 px-2" onClick={closeMenu} href='/'>{t('home')}</Link>
        <Link className="text-xl text-[#2F2D2D] py-1 px-2" onClick={closeMenu} href='/reporting'>{t('reporting')}</Link>
        <Link className="text-xl text-[#2F2D2D] py-1 px-2" onClick={closeMenu} href='/about'>{t('about')}</Link>
        <Link className="text-xl text-[#2F2D2D] py-1 px-2" onClick={closeMenu} href='/support'>{t('support')}</Link>
        <Link className="text-xl text-[#2F2D2D] py-1 px-2" onClick={closeMenu} href='/new-partner'>{t('partners')}</Link>
        <a className="text-[#2F2D2D] text-xl font-light p-1 mt-5" onClick={closeMenu} href="tel:+380939556041">+380939556041</a>
        <a className="text-[#2F2D2D] text-xl font-light p-1" onClick={closeMenu} href="tel:+380958418091">+380958418091</a>
      </nav>
    </div>
  )
}

export default Menu