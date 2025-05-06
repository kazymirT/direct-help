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

  const wrapperCN = clsx('wrapperAbout flex flex-col items-end', {
    ['gap-14 md:gap-25 lg:gap-[140px] xl:gap-[212px]']: isEN,
    ['gap-14 md:gap-25 lg:gap-[146px] xl:gap-[190px]']: isUK,
    ['gap-14 md:gap-25 lg:gap-[140px] xl:gap-[196px]']: isDE,
  });
  const descriptionsCN = clsx('w-full max-sm:max-w-[clamp(18.063rem,-7.675rem+109.811vw,36.25rem)] max-[850px]:max-w-9/10 min-[850px]:max-w-[40%] lg:max-w-[clamp(26.688rem,12.072rem+22.837vw,32.625rem)] text-[clamp(1rem,0.819rem+0.77vw,1.313rem)] lg:text-[clamp(1.313rem,0.236rem+1.683vw,1.75rem)] text-text2', {
    ['pt-[10px] -tracking-[0.0em] leading-[1.17]']: isEN,
    ['lg:pt-0 xl:pt-[34px] leading-[1.2]']: isUK,
    ['leading-[1.175]']: isDE,
  });
  const containerCN = clsx('w-full flex justify-center', {
    ['pb-12.5 md:pb-15 lg:pb-[84px] pt-4 xl:pt-[105px]']: isEN,
    ['pb-12.5 md:pb-15 lg:pb-[94px] pt-4 xl:pt-[90px]']: isUK,
    ['pb-12.5 md:pb-15 lg:pb-[97px] pt-4 xl:pt-[90px]']: isDE,
  });

  return (
    <div className={containerCN}>
      <div className={wrapperCN}>
        <section className=" w-full flex flex-col gap-1.5 lg:gap-2 xl:gap-4">
        <h2 className="font-medium text-[clamp(1.5rem,1.236rem+1.127vw,2.25rem)] text-text2">{t('title')}</h2>
        <div className="flex w-full flex-col min-[850px]:flex-row justify-between gap-10 min-[850px]:gap-15 xl:gap-20">
        <div className={descriptionsCN}>
          <p>{t('description-one')}</p>
          <p className="leading-[1.15]">{t('description-two')}</p>
          <p>{t('description-three')}</p>
        </div>
        <div className="relative pt-5 md:pt-10 lg:pt-[70px] xl:pt-[96px] h-fit max-[850px]:w-fit max-[850px]:self-center">
        <Image alt="" src='/about.png' width={301} height={212} className="relative w-[clamp(18.813rem,12.348rem+27.581vw,30rem)] lg:w-[clamp(30.625rem,3.394rem+42.548vw,41.688rem)] z-20 aspect-[1.31]"  />
          <div className="absolute top-0 md:top-4 lg:top-8 xl:top-[47px] -left-8 lg:-left-11.5 xl:-left-[58px] w-[clamp(6.563rem,4.179rem+10.169vw,10.688rem)] lg:w-[clamp(10.688rem,0.534rem+15.865vw,14.813rem)] aspect-[1.04] z-10 bg-[#0d1415]"></div>
          <div className="absolute bg-[#f8b428] aspect-[1.08] w-[clamp(9.125rem,5.803rem+14.176vw,14.875rem)] lg:w-[clamp(14.813rem,1.736rem+20.433vw,20.125rem)] -top-6 md:top-0 xl:top-1 right-0"></div>
          <div className="absolute bg-[#0d1415] aspect-[3.82] w-[clamp(10.125rem,6.514rem+15.408vw,16.375rem)] lg:w-[clamp(16.438rem,1.053rem+24.038vw,22.688rem)] -bottom-11 md:-bottom-[60px] xl:-bottom-[92px] right-0"></div>
          <Image alt="" src="/icons/about.svg" width={143} height={108} className="absolute aspect-[1.32] z-20 w-[clamp(8.938rem,5.687rem+13.867vw,14.563rem)] lg:w-[clamp(14.563rem,1.639rem+20.192vw,19.813rem)] -bottom-5 md:-bottom-6.5 xl:-bottom-11 -left-6 md:-left-12" />
        </div>
        </div>
        </section>
        <div className="w-full self-center flex justify-end">
          <div className="w-full max-w-[330px] min-xs:max-w-[241px] lg:max-w-[341px] xl:max-w-[416px] lg:pr-[clamp(3.125rem,0.356rem+4.327vw,4.25rem)] xl:pr-0">
          <Button size="full" variant="second" text={t('button')} link="/about" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About