import Image from 'next/image';
import { HEADER_LINKS } from './data';
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Link } from '@/i18n/navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useTranslations } from 'next-intl';

const HeaderRoot = () => {
  const t = useTranslations('header');
  return (
    <header className="xs:pt-3 xs:pb-3 relative m-auto flex w-full max-w-[1920px] justify-center bg-[#79a1d6] pt-[9px] pb-[9px] sm:pt-4 sm:pb-4 md:pt-5 md:pb-5 lg:pt-[26px] lg:pb-[26px] min-xl:pt-[32px] min-xl:pb-[47px]">
      <div className="wrapper flex justify-between max-lg:items-center">
        <BurgerMenu />
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
          <nav className="hidden min-lg:block">
            <ul className="flex gap-[25px] xl:gap-[100px]">
              {HEADER_LINKS.map(({ href, id, name }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="font-roboto px-[10px] text-xl font-normal text-[#2f2d2d] md:hover:text-[#1c1c1c]"
                  >
                    {t(name)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
};
export default HeaderRoot;
