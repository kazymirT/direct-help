import Button from '@/components/Button/Button';
import { ATTAINMENT_DATA } from './data';
import { getLocale, getTranslations } from 'next-intl/server';
import clsx from 'clsx';

const Attainment = async () => {
  const t = await getTranslations('home.attainment');
  const locale = await getLocale();

  const isEN = locale === 'en';
  const isUK = locale === 'uk';
  const isDE = locale === 'de';

  const cardCN = clsx(
    'pt-8 sm:pt-5 lg:pt-6 xl:pt-7.5 w-full xs:w-2/3 sm:w-1/3 rounded-[9px] md:rounded-md lg:rounded-xl flex flex-col items-center gap-1.5 md:gap-4 xl:gap-6 border-[3px] lg:border-[4px] border-[#f8b428]',
    {
      ['pb-9 sm:pb-[22px] px-3 sm:px-1 md:px-2 lg:px-8']: isEN || isDE,
      ['pb-9 sm:pb-5 md:pb-4 lg:pb-2 xl:pb-7 px-2 md:px-3']: isUK,
    }
  );

  return (
    <section className="bg-black-30 text-fon font-family m-auto flex w-full max-w-[1920px] justify-center pt-5 pb-11 md:pb-[34px] lg:pt-7 xl:pt-[37px]">
      <div className="wrapper flex flex-col gap-6.5 sm:gap-6 md:gap-8 xl:gap-[49px]">
        <h2 className="text-[clamp(1.5rem,1.356rem+0.616vw,1.75rem)] leading-[1.25] md:font-medium lg:text-[clamp(1.75rem,0.519rem+1.923vw,2.25rem)]">
          {t('title')}
        </h2>
        <div className="flex flex-col gap-3 max-sm:items-center sm:flex-row sm:gap-1.5 md:gap-2.5 lg:gap-3.5">
          {ATTAINMENT_DATA.map(({ description, id, title }) => (
            <article key={id} className={cardCN}>
              <h3 className="text-center text-[45px] sm:text-[clamp(1.875rem,-0.938rem+5.859vw,2.813rem)] lg:text-[clamp(2.813rem,-0.111rem+4.567vw,4rem)]">
                {id !== 3 ? title : t('moneyInfo', { amount: title })}
              </h3>
              <p className="text-center text-[18px] sm:text-[clamp(0.875rem,0.125rem+1.563vw,1.125rem)] lg:text-[clamp(1.125rem,0.202rem+1.442vw,1.5rem)]">
                {t(description)}
              </p>
            </article>
          ))}
        </div>
        <div className="xs:max-w-[241px] w-full max-w-[329px] self-end pt-[2px] md:pt-[14px] lg:max-w-[301px] xl:max-w-[415px]">
          <Button
            size="full"
            variant="basic"
            text={t('button')}
            link="/reporting"
          />
        </div>
      </div>
    </section>
  );
};

export default Attainment;
