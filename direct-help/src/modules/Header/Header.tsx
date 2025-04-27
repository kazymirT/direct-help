import Link from "next/link";
import Image from "next/image";
import { HEADER_LINKS, LANGUAGES_LINKS } from "./data";

const Header = () => {
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
              <Link href={href} className="px-[10px] text-xl font-normal text-[#2f2d2d] leading-1 font-roboto hover:text-[#1c1c1c]">{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul className="flex gap-1">
          {LANGUAGES_LINKS.map(({ href, id, name }) => (
            <li key={id} className="flex gap-1 items-center">
              {id > 1 && <span className="text-2xl leading-[1.1]">|</span>}
            <Link href={href} className="leading-1 text-lg text-[#2f2d2d] font-roboto hover:text-[#191616]">{name}</Link>
          </li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
    );
} 
export default Header;
