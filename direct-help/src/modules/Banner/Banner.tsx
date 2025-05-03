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

  const textCN = clsx('font-third flex flex-col', {
    ['gap-[44px]']: isEN,
    ['gap-[82px]']: isUK,
    ['gap-[18px]']: isDE,
  });
  const wrapperCN = clsx('flex flex-col w-full max-w-[1280px] m-auto', {
    ['gap-[162px]']: isEN,
    ['gap-[179px]']: isUK,
    ['gap-[80px]']: isDE,
  });

  return (
    <div className="banner">
      <Header />
      <div className={wrapperCN}>
        <section className={textCN}>
            {isEN && (
              <h1 className="text-[#0d1415] font-third w-full max-w-[650px]">
              <p className="text-[64px] inline leading-[1.39] font-medium">{t('title.one')}</p>
              <p className="inline text-[54px] leading-[2.7] pl-9 font-normal">{t('title.two')}</p>
            </h1>)}
            {isUK && (
              <h1 className="text-[#0d1415] font-third flex flex-col gap-11 w-full max-w-[650px]">
              <p className="text-[96px] leading-[1] font-normal">{t('title.one')}</p>
              <p className="text-[54px] leading-[1] font-normal">{t('title.two')}</p>
            </h1>)}
            {isDE && (
              <h1 className="text-[#0d1415] font-third flex flex-col gap-0 w-full max-w-[650px]">
              <p className="text-6xl leading-[1.6] font-medium">{t('title.one')}</p>
              <p className="text-[54px] leading-[1.4] font-normal">{t('title.two')}</p>
            </h1>)}
          <p className="font-normal text-4xl text-text2 max-w-[620px] leading-[1.5]">
            {t('description')}
          </p>
        </section>
        <div className="w-full max-w-[848px] flex gap-[18px]">
          <Button size="full" variant="basic" text={t('buttons.support')} link="/donate" />
          <Button size="full" variant="second" text={t('buttons.request')} link="/support" />
        </div>
      </div>
    </div>
  );
}
