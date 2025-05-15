import Button from "@/components/Button/Button";
import Header from "../../Header/Header";
import { getLocale, getTranslations } from "next-intl/server";
import clsx from "clsx";
import Video from "@/components/Video/Video";

export default async function Banner() {
  const t = await getTranslations('home.banner');
  const locale = await getLocale();

  const isEN = locale === 'en';
  const isUK = locale === 'uk';
  const isDE = locale === 'de';

  const textCN = clsx('flex flex-col', {
    ['gap-2 min-[375px]:gap-[clamp(1.375rem,-2.01rem+5.288vw,2.75rem)] min-[1500px]:pt-8 min-[1600px]:pt-10 min-[1700px]:pt-20 min-[1800px]:pt-30 min-[1900px]:pt-35']: isEN,
    ['gap-4 min-[375px]:gap-[clamp(2.875rem,-2.663rem+8.654vw,5.125rem)] min-[1500px]:pt-8 min-[1600px]:pt-10 min-[1700px]:pt-20 min-[1800px]:pt-30 min-[1900px]:pt-35']: isUK,
    ['gap-2 min-[375px]:gap-4.5 xs-max-md:gap-12 min-[1500px]:pt-8 min-[1600px]:pt-10 min-[1700px]:pt-20 min-[1800px]:pt-30 min-[1900px]:pt-35']: isDE,
  });
  const descriptionCN = clsx('font-third text-xs min-[375px]:text-[clamp(0.875rem,0.297rem+2.465vw,1.875rem)] lg:text-[clamp(1.875rem,0.952rem+1.442vw,2.25rem)] text-text2 leading-[1.25] xl:leading-[1.5]', {
    ['max-w-[180px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[clamp(27.5rem,-0.192rem+43.269vw,38.75rem)]']: isEN || isDE,
    ['max-w-[180px] min-[375px]:max-w-[200px] xs:max-w-[255px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[clamp(27.5rem,-0.192rem+43.269vw,38.75rem)]']: isUK,
  });
  const wrapperCN = clsx('relative flex flex-col w-full max-w-[1280px] m-auto', {
    ['pt-1 xs:pt-6 sm:pt-10 xl:pt-0 md:gap-[clamp(3.75rem,0rem+7.813vw,5rem)] lg:gap-[clamp(5rem,-7.615rem+19.712vw,10.125rem)]']: isEN,
    ['pt-4 xs:pt-6 sm:pt-10 xl:pt-0 md:gap-[clamp(3.75rem,-8.438rem+25.391vw,7.813rem)] lg:gap-[clamp(7.813rem,-0.495rem+12.981vw,11.188rem)] min-[1600px]:gap-50']: isUK,
    ['md:gap-9 lg:gap-[clamp(2.5rem,-3.654rem+9.615vw,5rem)] lg:pt-5 xl:pt-0']: isDE,
  });

  return (
    <div className="banner">
      <div className="wrapper">
      <Header />
      <div className={wrapperCN}>
        <section className={textCN}>
            {isEN && (
              <h1 className="text-[#0d1415] font-third w-full max-w-[160px] min-[375px]:max-w-[clamp(10.625rem,-0.706rem+48.346vw,22.5rem)] md:max-w-[clamp(22.5rem,-13.125rem+74.219vw,34.375rem)] lg:max-w-[650px]">
              <p className="text-xl min-[375px]:text-[clamp(1.375rem,0.219rem+4.931vw,3.375rem)] lg:text-[clamp(3.375rem,1.837rem+2.404vw,4rem)] inline leading-[1.39] font-medium">{t('title.one')}</p>
              <p className="inline text-[15px] min-[375px]:text-[clamp(1rem,0.278rem+3.082vw,2.25rem)] lg:text-[clamp(2.25rem,-0.519rem+4.327vw,3.375rem)] min-lg:leading-[2.7] pl-1 lg:pl-3 xl:pl-9 font-normal">{t('title.two')}</p>
            </h1>)}
            {isUK && (
              <h1 className="text-[#0d1415] font-third flex flex-col gap-4 xl:gap-11 w-full max-w-[650px]">
              <p className="text-[clamp(1.625rem,0.614rem+4.314vw,3.375rem)] lg:text-[clamp(3.375rem,-3.087rem+10.096vw,6rem)] leading-[1] font-normal">{t('title.one')}</p>
              <p className="text-[clamp(1rem,0.278rem+3.082vw,2.25rem)] lg:text-[clamp(2.25rem,-0.519rem+4.327vw,3.375rem)] leading-[1] font-normal">{t('title.two')}</p>
            </h1>)}
            {isDE && (
              <h1 className="text-[#0d1415] font-third flex flex-col gap-0 w-full max-w-[clamp(10.313rem,-1.317rem+49.618vw,22.5rem)] min-[768px]:max-w-[clamp(22.5rem,0rem+46.875vw,30rem)] min-[1024px]:max-w-[480px] min-[1180px]:max-w-[530px] xl:max-w-[620px]">
              <p className="text-[clamp(1.125rem,0.331rem+3.39vw,2.5rem)] lg:text-[clamp(2.5rem,-0.577rem+4.808vw,3.75rem)] leading-[1.1] xs:leading-[1.4] md:leading-[1.6] font-medium">{t('title.one')}</p>
              <p className="text-[clamp(1rem,0.278rem+3.082vw,2.25rem)] lg:text-[clamp(2.25rem,-0.519rem+4.327vw,3.375rem)] leading-[1.1] xs:leading-[1.3] md:leading-[1.4]">{t('title.two')}</p>
            </h1>)}
          <p className={descriptionCN}>
            {t('description')}
          </p>
        </section>
        <div className="relative z-10 max-md:hidden w-full md:max-w-[500px] lg:max-w-[clamp(37.75rem,0.212rem+58.654vw,53rem)] flex gap-[18px]">
          <Button size="full" variant="basic" text={t('buttons.support')} link="/donate" />
          <Button size="full" variant="second" text={t('buttons.request')} link="/support" />
        </div>
        <Video />
      </div>
    </div>
    </div>
  );
}
