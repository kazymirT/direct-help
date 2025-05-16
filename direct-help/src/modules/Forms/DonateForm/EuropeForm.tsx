import Button from "@/components/Button/Button"
import { EUROPE_DATA } from "./data"
import Cryptocurrency from "@/components/Cryptocurrency/Cryptocurrency"
import { getTranslations } from "next-intl/server";

const EuropeForm = async () => {
  const t = await getTranslations('form.payment.donate');
  return (
    <section className="w-full max-w-[clamp(34.25rem,5.019rem+45.673vw,46.125rem)] pt-4.5 lg:pt-0 xl:pt-4 flex flex-col gap-6.5 lg:gap-[11px] xl:gap-[19px]">
      <div className="flex justify-between w-full max-md:flex-col max-md:gap-6 max-w-[676px] xl:pl-1 items-center">
      <h2 className="max-md:self-start text-[clamp(1.25rem,0.925rem+1.387vw,1.813rem)] lg:text-[clamp(1.813rem,0.736rem+1.683vw,2.25rem)] leading-[28px]">{t('title')}</h2>
      <div className="w-full md:max-w-[175px] xl:max-w-[219px]">
        <Button size="full-xs" variant="second" text={t('button')} />
      </div>
      </div>
      <section className="w-full max-w-[655px]">
        <h3 className="text-text text-xl lg:text-[22px] xl:text-2xl">{t('subtitle')}</h3>
        <p className="text-[10px] md:text-sm xl:text-base">{t.rich('description', {
          strong: (chunks) => <span className="text-xs md:text-base xl:text-xl">{chunks}</span> 
        })}</p>
      </section>
      <section className="flex flex-col gap-2 lg:gap-4 xl:gap-[22px]">
        {EUROPE_DATA.map(({ id, ...props }) => (
          <Cryptocurrency key={id} {...props} />
        ))}
      </section>
    </section>
  )
}

export default EuropeForm