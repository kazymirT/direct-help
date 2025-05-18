import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const Footer = async () => {
  const t = await getTranslations('footer');
  return (
    <div className="m-auto flex w-full max-w-[1920px] flex-col items-center bg-[#0d1415] pt-4 pb-[34px] text-[#fff8f3] sm:pt-3">
      <div className="wrapper flex flex-col gap-[55px] text-base sm:gap-9 min-lg:text-xl">
        <div className="flex w-full flex-col justify-between max-sm:gap-[6px] sm:items-center sm:gap-5 md:flex-row md:gap-25 lg:gap-40">
          <Link href="/" className="self-start">
            <Image
              alt="logo icon"
              src="/icons/logo_small.svg"
              width={93}
              height={92}
              className="size-15 md:size-20 lg:size-[92px]"
            />
          </Link>
          <div className="xs:gap-10 flex w-full max-w-[971px] justify-between gap-5 max-sm:max-w-[400px] max-sm:flex-wrap max-sm:pt-2">
            <ul className="flex flex-col gap-3 max-sm:w-full">
              <li>
                <a
                  href="tel:+380939556041"
                  className="text-[#efefef] transition-all duration-300 active:text-[#fefdfd] md:hover:text-[#b2adad]"
                >
                  +380939556041
                </a>
              </li>
              <li>
                <a
                  href="tel:+380958418091"
                  className="text-[#efefef] transition-all duration-300 active:text-[#fefdfd] md:hover:text-[#b2adad]"
                >
                  +380958418091
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-4 md:gap-3">
              <li>
                <Link
                  href="/new-partner"
                  className="text-[#efefef] transition-all duration-300 active:text-[#fefdfd] md:hover:text-[#b2adad]"
                >
                  {t('partners')}
                </Link>
              </li>
              <li>
                <Link
                  href="/reporting"
                  className="text-[#efefef] transition-all duration-300 active:text-[#fefdfd] md:hover:text-[#b2adad]"
                >
                  {t('reporting')}
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-4 md:gap-3">
              <li>
                <Link
                  href="/support"
                  className="text-[#efefef] transition-all duration-300 active:text-[#fefdfd] md:hover:text-[#b2adad]"
                >
                  {t('support')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#efefef] transition-all duration-300 active:text-[#fefdfd] md:hover:text-[#b2adad]"
                >
                  {t('about')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <nav className="self-start">
          <ul className="flex gap-3">
            <li>
              <a
                href="https://www.instagram.com/trucks4u_/"
                className="flex size-[26px] items-center justify-center rounded-full border-2 border-[#acb0b4] transition-all duration-300 md:size-10 md:hover:border-[#fefefe]"
              >
                <Image
                  alt="Link to Instagram"
                  src="/icons/instagram.svg"
                  width={16}
                  height={16}
                  className="md:size-6"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61562872632085&locale=uk_UA"
                className="flex size-[26px] items-center justify-center rounded-full border-2 border-[#acb0b4] transition-all duration-300 md:size-10 md:hover:border-[#fefefe]"
              >
                <Image
                  alt="Link to facebook"
                  src="/icons/facebook.svg"
                  width={16}
                  height={16}
                  className="md:size-6"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
