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

  const cardCN = clsx('pt-[30px] w-full max-w-[420px] rounded-xl flex flex-col items-center gap-[24px] border-[4px] border-[#f8b428]', {
    ['pb-[22px] px-8 ']: isEN || isDE,
    ['pb-14 px-3' ]: isUK,
  });

  return (
    <section className="pt-[37px] pb-[34px] bg-black-30 text-fon font-family flex justify-center">
      <div className="w-full max-w-[1288px] flex flex-col gap-[53px]">
      <h2 className="font-medium text-[36px] leading-[47px]">{t('title')}</h2>
      <div className="flex justify-between">
        {ATTAINMENT_DATA.map(({ description, id, title }) => (
          <article key={id} className={cardCN}>
            <h3 className="text-center font-normal text-[64px]">{id !== 3 ? title : t('moneyInfo', {amount: title})}</h3>
            <p className="text-2xl">{t(description)}</p>
           </article> 
        ))}
      </div>
      <div className="self-end w-[415px] pt-[14px]">
      <Button  size="full" variant="basic" text={t('button')} link="/reporting" />
      </div>
        </div>
      </section>
  )
}

export default Attainment;
