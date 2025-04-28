import Button from "@/components/Button/Button"
import { ATTAINMENT_DATA } from "./data"
import { getTranslations } from "next-intl/server";

const Attainment = async () => {
  const t = await getTranslations('home.attainment');
  return (
    <section className="pt-[37px] pb-[34px] bg-black-30 text-fon font-family flex justify-center">
      <div className="w-full max-w-[1288px] flex flex-col gap-[53px]">
      <h2 className="font-medium text-[40px] leading-[47px]">{t('title')}</h2>
      <div className="flex justify-between">
        {ATTAINMENT_DATA.map(({ description, id, title }) => (
          <article key={id} className="pt-[30px] pb-14 w-full max-w-[420px] rounded-xl px-3 flex flex-col items-center gap-[24px] border-[4px] border-[#f8b428]">
            <h3 className="text-center font-normal text-[64px]">{title}</h3>
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
