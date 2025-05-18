import Button from '@/components/Button/Button';
import clsx from 'clsx';
import { getLocale, getTranslations } from 'next-intl/server';

const Donate = async () => {
  const t = await getTranslations('home.donate');
  const locale = await getLocale();

  const isEN = locale === 'en';
  const isUK = locale === 'uk';
  const isDE = locale === 'de';

  const containerCN = clsx('relative flex items-center flex-col', {
    ['pt-13.5 xs:pt-8 sm:pt-12 md:pt-15 lg:pt-25 xl:pt-[109px] gap-15 md:gap-[35px] pb-9 xs:pb-8 sm:pb-12 md:pb-15 lg:pb-25 xl:pb-[154px]']:
      isUK,
    ['pt-13.5 xs:pt-8 sm:pt-12 md:pt-15 lg:pt-25 xl:pt-[109px] gap-15 md:gap-[15px] pb-9 xs:pb-8 sm:pb-12 md:pb-15 lg:pb-25 xl:pb-[180px]']:
      isDE,
    ['pt-13.5 xs:pt-8 sm:pt-12 md:pt-15 lg:pt-25 xl:pt-[114px] gap-15 md:gap-[17px] pb-9 xs:pb-8 sm:pb-12 md:pb-15 lg:pb-25 xl:pb-[215px]']:
      isEN,
  });
  return (
    <section className={containerCN}>
      <div className="wrapper relative flex items-end justify-between">
        <div className="font-family text-text2 relative z-20 w-full max-w-[799px] pl-2 text-[clamp(1rem,0.892rem+0.462vw,1.188rem)] sm:pl-5 md:pl-16 lg:text-[clamp(1.188rem,-0.197rem+2.163vw,1.75rem)]">
          <h3>{t('title')}</h3>
          <p className="leading-[1.1]">{t('description-one')}</p>
          <p className="leading-[1.1]">{t('description-two')}</p>
          <p>{t('description-three')}</p>
          <div className="bg-text2 absolute bottom-[clamp(2.5rem,4.885rem+-10.178vw,0rem)] -left-[clamp(4.625rem,5.853rem+-5.239vw,2.5rem)] h-1 w-[clamp(9.375rem,0rem+19.531vw,12.5rem)] rotate-90 md:bottom-[clamp(0rem,-3.75rem+7.813vw,1.25rem)] md:-left-[clamp(2.5rem,-5rem+15.625vw,5rem)] lg:bottom-[clamp(1.25rem,-4.135rem+8.413vw,3.438rem)] lg:-left-[clamp(5rem,-5.462rem+16.346vw,9.25rem)] lg:w-[clamp(12.5rem,-6.577rem+29.808vw,20.25rem)]"></div>
          <div className="bg-text2 absolute -bottom-[clamp(0.5rem,0.067rem+1.849vw,1.25rem)] -left-[clamp(1.25rem,-3.25rem+9.375vw,2.75rem)] h-1 w-[clamp(9.375rem,0rem+19.531vw,12.5rem)] md:-bottom-[clamp(1.25rem,0.313rem+1.953vw,1.563rem)] lg:-bottom-[clamp(1.563rem,-3.053rem+7.212vw,3.438rem)] lg:-left-11 lg:w-[clamp(12.5rem,-9.038rem+33.654vw,21.25rem)]"></div>
        </div>
        <div className="absolute top-0 right-0 z-10 rounded-full bg-[#F8B428] blur-[125px] md:size-60 lg:size-80 xl:size-125"></div>
      </div>
      <div className="absolute top-0 left-0 z-10 rounded-full bg-[#3d69d84d] blur-[125px] md:size-80 lg:size-120 xl:size-170"></div>
      <div className="wrapper flex justify-end">
        <div className="xs:max-w-[241px] z-20 w-full max-w-[329px] md:pb-4 lg:max-w-[301px] xl:max-w-[413px]">
          <Button
            size="full"
            variant="second"
            text={t('button')}
            link="/donate"
          />
        </div>
      </div>
    </section>
  );
};

export default Donate;
