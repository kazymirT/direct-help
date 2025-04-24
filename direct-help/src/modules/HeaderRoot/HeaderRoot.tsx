import Link from "next/link";
import Image from "next/image";
import { HEADER_LINKS, LANGUAGES_LINKS } from "./data";

const HeaderRoot = () => {
    return (
    <header className="w-full pt-[27px] pb-10 flex justify-center bg-[#79a1d6]">
      <div className="w-full max-w-[1347px] flex justify-between">
      <Link href={'/'}>
        <Image src='/logo.svg' alt="logo" width={139} height={58} />
      </Link>
      <div className="flex gap-[90px] pt-[38px]">
      <nav>
        <ul className="flex gap-[100px]">
          {HEADER_LINKS.map(({ href, id, name }) => (
            <li key={id}>
              <Link href={href} className="px-[10px] text-xl font-normal text-[#2f2d2d] font-roboto hover:text-[#1c1c1c]">{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul className="flex gap-1">
          {LANGUAGES_LINKS.map(({ href, id, name }) => (
            <li key={id} className="flex gap-1 items-center">
              {id > 1 && <span className="text-2xl">|</span>}
            <Link href={href} className=" text-lg text-[#2f2d2d] font-roboto hover:text-[#191616]">{name}</Link>
          </li>
          ))}
        </ul>
      </nav>
      </div>
      </div>
    </header>
    );
} 
export default HeaderRoot;
