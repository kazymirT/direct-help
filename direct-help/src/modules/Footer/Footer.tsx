import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image"

const Footer = async () => {
  const t = await getTranslations('footer');
  return (
    <div className="bg-[#0d1415] pt-4 sm:pt-3 pb-[34px] text-[#fff8f3] flex flex-col items-center">
      <div className="wrapper text-base min-lg:text-xl flex flex-col gap-[55px] sm:gap-9">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center max-md:gap-[6px] w-full">
        <Link href='/' >
          <Image alt="logo icon" src='/icons/logo_small.svg' width={93} height={92} className="size-15 md:size-20 lg:size-[92px]" />
        </Link>
          <ul className="flex flex-col gap-[1px] sm:gap-3">
            <li>
              <a href="tel:+380939556041" className="text-[#efefef] hover:text-[#b2adad] active:text-[#fefdfd] transition-all duration-300">+380939556041</a>
            </li>
            <li>
              <a href="tel:+380958418091" className="text-[#efefef] hover:text-[#b2adad] active:text-[#fefdfd] transition-all duration-300">+380958418091</a>
            </li>
          </ul>
          <div className="flex justify-between max-sm:pt-2 gap-12 md:gap-25">
          <ul className="flex flex-col gap-4 md:gap-3">
            <li>
              <Link href='/new-partner' className="text-[#efefef] hover:text-[#b2adad] active:text-[#fefdfd] transition-all duration-300">{t('partners')}</Link>
            </li>
            <li>
            <Link href='/reporting' className="text-[#efefef] hover:text-[#b2adad] active:text-[#fefdfd] transition-all duration-300">{t('reporting')}</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-4 md:gap-3">
            <li>
              <Link href='/support' className="text-[#efefef] hover:text-[#b2adad] active:text-[#fefdfd] transition-all duration-300">{t('support')}</Link>
            </li>
            <li>
            <Link href='/about' className="text-[#efefef] hover:text-[#b2adad] active:text-[#fefdfd] transition-all duration-300">{t('about')}</Link>
            </li>
          </ul>
          </div>
      </div>
      <nav className="self-start">
        <ul className="flex gap-3">
          <li>
            <a href="https://www.instagram.com/trucks4u_/" className="flex justify-center items-center size-[26px] md:size-10 rounded-full border-2 border-[#acb0b4] hover:border-[#fefefe] transition-all duration-300">
              <Image alt="Link to Instagram" src='/icons/instagram.svg' width={16} height={16} className="md:size-6" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61562872632085&locale=uk_UA" className="flex justify-center items-center size-[26px] md:size-10 rounded-full border-2 border-[#acb0b4] hover:border-[#fefefe] transition-all duration-300">
              <Image alt="Link to facebook" src='/icons/facebook.svg' width={16} height={16} className="md:size-6" />
            </a>
          </li>
          <li>
            <a href="" className="flex justify-center items-center size-[26px] md:size-10 rounded-full border-2 border-[#acb0b4] hover:border-[#fefefe] transition-all duration-300">
              <Image alt="Link to telegram " src='/icons/telegram.svg' width={16} height={16} className="md:size-6" />
            </a>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  )
}

export default Footer