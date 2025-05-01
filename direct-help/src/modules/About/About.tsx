import Button from "@/components/Button/Button"
import Image from "next/image"
import { getLocale, getTranslations } from "next-intl/server";
import clsx from "clsx";

const About = async () => {
  const t = await getTranslations('home.about');
  const locale = await getLocale();

  const isEN = locale === 'en';
  const isUK = locale === 'uk';
  const isDE = locale === 'de';

  const wrapperCN = clsx('w-full max-w-[1280px] flex flex-col items-end', {
    ['gap-[150px]']: isEN,
    ['gap-[140px]']: isUK,
    ['gap-[116px]']: isDE,
  });
  const descriptionsCN = clsx('w-full max-w-[522px] text-3xl text-text2', {
    ['pt-3 tracking-[0] leading-[1.15]']: isEN,
    ['']: isUK,
    ['leading-[1.172]']: isDE,
  });
  const containerCN = clsx('w-full flex justify-center', {
    ['pb-[81px] pt-[99px]']: isEN,
    ['pb-[94px] pt-[90px]']: isUK || isDE,
  });

  return (
    <div className={containerCN}>
      <div className={wrapperCN}>
        <section className="w-full flex flex-col gap-4">
        <h2 className="font-medium text-[40px] text-text2">{t('title')}</h2>
        <div className="flex w-full justify-between">
        <div className={descriptionsCN}>
          <p>{t('description-one')}</p>
          <p className="leading-[1.15]">{t('description-two')}</p>
          <p>{t('description-three')}</p>
        </div>
        <div className="relative pt-[96px] h-fit">
        <Image alt="" src='/about.png' width={666} height={507} className="relative z-20 h-[507px]"  />
          <div className="absolute top-[47px] -left-[58px] bg-[#0d1415] w-[237px] h-[227px] z-10"></div>
          <div className="absolute top-1 right-0 bg-[#f8b428] w-[322px] h-[297px]"></div>
          <div className="absolute -bottom-[92px] right-0 bg-[#0d1415] w-[363px] h-[95px]"></div>
          <Image alt="" src="/icons/about.svg" width={323} height={263} className="absolute -bottom-11 -left-12 z-20" />
        </div>
        </div>
        </section>
        <div className="w-full max-w-[1290px] self-center flex justify-end">
          <div className="w-full max-w-[416px]">
          <Button size="full" variant="second" text={t('button')} link="/about" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About