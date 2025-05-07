import Image from "next/image";
import { HEADER_LINKS } from "./data";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const Header = async () => {
  const t = await getTranslations('header');

  return (
    <header className="w-full relative pt-[7px] pb-[11px] xs:pt-3 xs:pb-3 sm:pt-4 sm:pb-4 md:pt-5 md:pb-5 lg:pt-[26px] lg:pb-[48px] min-xl:pt-[32px] min-xl:pb-8 flex justify-center">
          <div className="m-auto w-full flex justify-between max-lg:items-center">
          <Image src='/burger.svg' alt="menu open icon" width={24} height={17} className="min-lg:hidden" />
          <Link href={'/'} className="max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-1/2 max-lg:-translate-y-1/2">
            <Image src='/logo.svg' alt="logo" width={71} height={30} className="w-[clamp(4.438rem,3.426rem+4.314vw,6.188rem)] lg:w-[clamp(6.188rem,0.034rem+9.615vw,8.688rem)] aspect-[2.37] min-2xl:w-[139px]" />
          </Link>
          <div className="flex gap-[75px]">
          <nav className="hidden min-lg:block">
            <ul className="flex gap-[25px] xl:gap-[120px]">
              {HEADER_LINKS.map(({ href, id, name }) => (
                <li key={id}>
                  <Link href={href} className="px-[10px] text-xl font-normal text-[#2f2d2d] font-roboto hover:text-[#1c1c1c]">{t(name)}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <LocaleSwitcher />
          </div>
          </div>
        </header>
  );
} 
export default Header;

