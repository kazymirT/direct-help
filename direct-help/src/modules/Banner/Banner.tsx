import Button from "@/components/Button/Button";
import Header from "../Header/Header";
import { getLocale, getTranslations } from "next-intl/server";
import clsx from "clsx";

export default async function Banner() {
  const t = await getTranslations('home.banner');
  const locale = await getLocale();

  const isEN = locale === 'en';
  const isUK = locale === 'uk';

  const textCN = clsx('font-third flex flex-col', {
    ['gap-[32px]']: isEN,
    ['gap-[82px]']: isUK,
  });
  const wrapperCN = clsx('flex flex-col w-full max-w-[1280px] m-auto', {
    ['gap-[35px]']: isEN,
    ['gap-[179px]']: isUK,
  });

  return (
    <div className="banner">
      <Header />
      <div className={wrapperCN}>
        <section className={textCN}>
            {isEN && (<h1 className="text-black-20 text-8xl leading-[1.035] font-third w-full max-w-[650px]">{t('title')}</h1>)}
            {isUK && 
            (
              <h1 className="text-black-20 font-third flex flex-col gap-11 w-full max-w-[650px]">
              <p className="text-[96px] leading-[1] font-normal">{t('title.one')}</p>
              <p className="text-[54px] leading-[1] font-normal">{t('title.two')}</p>
            </h1>)}
      
          <p className="font-normal text-4xl text-text2 max-w-[620px] leading-[1.5]">
            {t('description')}
          </p>
        </section>
        <div className="w-full max-w-[848px] flex gap-[18px]">
          <Button size="full" variant="basic" text={t('buttons.support')} link="/support" />
          <Button size="full" variant="second" text={t('buttons.request')} link="/form" />
        </div>
      </div>
    </div>
  );
}
