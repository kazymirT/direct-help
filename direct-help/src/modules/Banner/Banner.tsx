import Button from "@/components/Button/Button";
import Header from "../Header/Header";
import { getLocale, getTranslations } from "next-intl/server";
import clsx from "clsx";

export default async function Banner() {
  const t = await getTranslations('home.banner');
  const locale = await getLocale();

  const isEN = locale === 'en';
  const isUK = locale === 'uk';
  const isDE = locale === 'de';

  const textCN = clsx('flex flex-col', {
    ['gap-[clamp(1.375rem,-2.01rem+5.288vw,2.75rem)]']: isEN,
    ['gap-[clamp(2.875rem,-2.663rem+8.654vw,5.125rem)]']: isUK,
    ['gap-[18px]']: isDE,
  });
  const wrapperCN = clsx('flex flex-col w-full max-w-[1280px] m-auto', {
    ['max-lg:pt-10 md:gap-[clamp(3.75rem,0rem+7.813vw,5rem)] lg:gap-[clamp(5rem,-7.615rem+19.712vw,10.125rem)]']: isEN,
    ['max-lg:pt-10 md:gap-[clamp(3.75rem,-8.438rem+25.391vw,7.813rem)] lg:gap-[clamp(7.813rem,-0.495rem+12.981vw,11.188rem)]']: isUK,
    ['md:gap-9 lg:gap-[clamp(2.5rem,-3.654rem+9.615vw,5rem)]']: isDE,
  });

  return (
    <div className="banner">
      <div className="wrapper">
      <Header />
      <div className={wrapperCN}>
        <section className={textCN}>
            {isEN && (
              <h1 className="text-[#0d1415] font-third w-full max-w-[clamp(9.375rem,-3.149rem+53.435vw,22.5rem)] md:max-w-[clamp(22.5rem,-13.125rem+74.219vw,34.375rem)] lg:max-w-[650px]">
              <p className="text-[clamp(1.125rem,-0.175rem+5.547vw,3.375rem)] lg:text-[clamp(3.375rem,1.837rem+2.404vw,4rem)] inline leading-[1.39] font-medium">{t('title.one')}</p>
              <p className="inline text-[clamp(1rem,0.278rem+3.082vw,2.25rem)] lg:text-[clamp(2.25rem,-0.519rem+4.327vw,3.375rem)] min-lg:leading-[2.7] pl-1 lg:pl-3 xl:pl-9 font-normal">{t('title.two')}</p>
            </h1>)}
            {isUK && (
              <h1 className="text-[#0d1415] font-third flex flex-col gap-4 xl:gap-11 w-full max-w-[650px]">
              <p className="text-[clamp(1.563rem,0.515rem+4.468vw,3.375rem)] lg:text-[clamp(3.375rem,-3.087rem+10.096vw,6rem)] leading-[1] font-normal">{t('title.one')}</p>
              <p className="text-[clamp(0.875rem,0.081rem+3.39vw,2.25rem)] lg:text-[clamp(2.25rem,-0.519rem+4.327vw,3.375rem)] leading-[1] font-normal">{t('title.two')}</p>
            </h1>)}
            {isDE && (
              <h1 className="text-[#0d1415] font-third flex flex-col gap-0 w-full max-w-[clamp(9.375rem,-3.149rem+53.435vw,22.5rem)] min-[768px]:max-w-[clamp(22.5rem,0rem+46.875vw,30rem)] min-[1024px]:max-w-[480px] min-[1180px]:max-w-[530px] xl:max-w-[620px]">
              <p className="text-[clamp(1.25rem,0.528rem+3.082vw,2.5rem)] lg:text-[clamp(2.5rem,-0.577rem+4.808vw,3.75rem)] leading-[1.6] font-medium">{t('title.one')}</p>
              <p className="text-[clamp(1.125rem,0.475rem+2.773vw,2.25rem)] lg:text-[clamp(2.25rem,-0.519rem+4.327vw,3.375rem)] leading-[1.4]">{t('title.two')}</p>
            </h1>)}
          <p className=" xl:font-third text-[clamp(0.563rem,-0.196rem+3.236vw,1.875rem)] lg:text-[clamp(1.875rem,0.952rem+1.442vw,2.25rem)] text-text2 max-w-[185px] xs:max-w-[255px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[clamp(27.5rem,-0.192rem+43.269vw,38.75rem)] leading-[1.25] xl:leading-[1.5]">
            {t('description')}
          </p>
        </section>
        <div className="max-md:hidden w-full md:max-w-[500px] lg:max-w-[clamp(37.75rem,0.212rem+58.654vw,53rem)] flex gap-[18px]">
          <Button size="full" variant="basic" text={t('buttons.support')} link="/donate" />
          <Button size="full" variant="second" text={t('buttons.request')} link="/support" />
        </div>
      </div>
    </div>
    </div>
  );
}
