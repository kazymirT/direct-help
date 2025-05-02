import Image from "next/image";
import { HEADER_LINKS } from "./data";
import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";
import { Link } from "@/i18n/navigation";

const HeaderRoot = async () => {
  const t = await getTranslations('header');
    return (
    <header className="w-full relative pt-[7px] pb-[11px] xs:pt-3 xs:pb-3 sm:pt-4 sm:pb-4 md:pt-5 md:pb-5 lg:pt-[26px] lg:pb-[26px]  min-xl:pt-[32px] min-xl:pb-[47px] flex justify-center bg-[#79a1d6]">
      <div className="wrapper flex justify-between max-lg:items-center">
      <Image src='/burger.svg' alt="menu open icon" width={24} height={17} className="min-lg:hidden" />
      <Link href={'/'} className="max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-1/2 max-lg:-translate-y-1/2">
        <Image src='/logo.svg' alt="logo" width={50} height={21} className="xs:w-[clamp(3.125rem,-1.783rem+16.36vw,8.688rem)] xs:h-[clamp(1.313rem,-0.728rem+6.801vw,3.625rem)] min-2xl:w-[139px] min-2xl:h" />
      </Link>
      <div className="flex gap-[45px] lg:pt-[15px] xl:pt-[23px]">
      <nav className="hidden min-lg:block">
        <ul className="flex gap-[25px] xl:gap-[100px]">
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
export default HeaderRoot;
