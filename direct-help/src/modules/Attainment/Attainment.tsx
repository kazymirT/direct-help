import Button from "@/components/Button/Button"
import { ATTAINMENT_DATA } from "./data"
import { getLocale, getTranslations } from "next-intl/server";
import clsx from "clsx";

const Attainment = async () => {
  const t = await getTranslations('home.attainment');
  const locale = await getLocale();

  const isEN = locale === 'en';
  const isUK = locale === 'uk';
  const isDE = locale === 'de';

  const cardCN = clsx('pt-2 xs:pt-4 sm:pt-5 lg:pt-6 xl:pt-7.5 w-1/3 rounded-[3px] md:rounded-md lg:rounded-xl flex flex-col items-center gap-1.5 md:gap-4 xl:gap-6 border-[1px] md:border-[2px] lg:border-[4px] border-[#f8b428]', {
    ['pb-[22px] px-2 sm:px-8 ']: isEN || isDE,
    ['pb-1.5 xs:pb-4 sm:pb-5 md:pb-4 lg:pb-2 xl:pb-14 px-2 md:px-3' ]: isUK,
  });

  return (
    <section className="pt-5 lg:pt-7 xl:pt-[37px] pb-[34px] bg-black-30 text-fon font-family flex justify-center">
      <div className="wrapper flex flex-col gap-8 sm:gap-6 md:gap-8 xl:gap-[53px]">
      <h2 className="md:font-medium text-[clamp(1.5rem,1.356rem+0.616vw,1.75rem)] lg:text-[clamp(1.75rem,0.519rem+1.923vw,2.25rem)] leading-[1.25]">{t('title')}</h2>
      <div className="flex gap-2 md:gap-2.5 lg:gap-3.5">
        {ATTAINMENT_DATA.map(({ description, id, title }) => (
          <article key={id} className={cardCN}>
            <h3 className="text-center text-[clamp(1rem,-0.047rem+4.468vw,2.813rem)] lg:text-[clamp(2.813rem,-0.111rem+4.567vw,4rem)]">{id !== 3 ? title : t('moneyInfo', {amount: title})}</h3>
            <p className="text-center text-[clamp(0.375rem,-0.022rem+1.695vw,1.063rem)] lg:text-[clamp(1.125rem,0.202rem+1.442vw,1.5rem)]">{t(description)}</p>
           </article> 
        ))}
      </div>
      <div className="w-full self-end max-w-[329px] xs:max-w-[241px] lg:max-w-[301px] xl:max-w-[415px] pt-[2px] md:pt-[14px]">
      <Button  size="full" variant="basic" text={t('button')} link="/reporting" />
      </div>
        </div>
      </section>
  )
}

export default Attainment;
