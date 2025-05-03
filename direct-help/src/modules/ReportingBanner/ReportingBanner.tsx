import { getTranslations } from "next-intl/server";
import Image from "next/image";

const ReportingBanner = async () => {
  const t = await getTranslations('reporting');
  return (
    <section className="reporting flex items-center relative overflow-hidden">
      <div className="w-full max-w-[1280px] pt-0 m-auto flex justify-between">
        <h1 className="text-[#fdf9f0] text-[clamp(1.563rem,0rem+6.667vw,6rem)] font-third font-light">{t('title')}</h1>
        <h2 className="text-[#1b1a1a] text-[clamp(0.625rem,-0.035rem+2.817vw,2.5rem)] w-full max-w-[460px]">{t('subtitle')}</h2>
      </div>
      <div className="w-[30px] h-[150px] flex gap-[10px] absolute top-2 left-1/2 -translate-x-1/2">
      <Image alt="icons" src='/reportings/line.svg' width={10} height={150} />
      <Image alt="icons" src='/reportings/line.svg' width={10} height={150} />
      <Image alt="icons" src='/reportings/line.svg' width={10} height={150} />
      </div>
      <Image alt="icons" src='/reportings/line.svg' width={10} height={150} className="absolute bottom-2 right-6" />
      <Image alt="icons" src='/reportings/lines2.svg' width={340} height={150} className="absolute -bottom-[45px] left-[130px]" />
    </section>
  )
}

export default ReportingBanner;
