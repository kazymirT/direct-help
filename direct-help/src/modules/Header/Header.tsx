import Image from "next/image";
import { HEADER_LINKS } from "./data";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const Header = async () => {
  const t = await getTranslations('header');

  return (
    <header className="w-full max-w-[1280px] m-auto pr-[3px] py-8 flex justify-between">
      <Link href={'/'}>
        <Image src='/logo.svg' alt="logo" width={139} height={58} />
      </Link>
      <div className="flex gap-[90px]">
        <nav>
          <ul className="flex gap-[125px]">
            {HEADER_LINKS.map(({ href, id, name }) => (
              <li key={id}>
                <Link href={href} className="px-[10px] text-xl font-normal text-[#2f2d2d] leading-1 font-roboto hover:text-[#1c1c1c]">{t(`${name}`)}</Link>
              </li>
             ))}
          </ul>
        </nav>
        <LocaleSwitcher />
      </div>
    </header>
  );
} 
export default Header;
