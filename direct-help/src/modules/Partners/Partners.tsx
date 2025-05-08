import Button from "@/components/Button/Button";
import Slider from "../SliderPartners/Slider";
import { PARTNERS_DATA } from "./data";
import { EmblaOptionsType } from 'embla-carousel'
import { getTranslations } from "next-intl/server";
const OPTIONS: EmblaOptionsType = { loop: true, align: 'start', duration: 500, skipSnaps: true }

const Partners = async () => {
  const t = await getTranslations('home.partners');
  return (
    <div className="w-full lg:mt-[72px] flex flex-col items-end gap-5 lg:gap-10 xl:gap-[65px]">
      <div className="w-full bg-gradient-partners flex flex-col items-end pb-5 xs:pb-7 sm:pb-9 md:pb-[92px]">
      <section className="wrapper m-auto pb-2 sm:pt-4 md:pt-5 lg:pt-0 lg:pb-[30px]">
        <h2 className="font-family text-[clamp(1.563rem,1.32rem+1.033vw,2.25rem)] leading-[2] lg:leading-[1.3] text-text2">{t('title')}</h2>
      </section>
      <div className="w-full">
        <Slider slides={PARTNERS_DATA} options={OPTIONS}  />
      </div>
      </div>
      <div className="wrapper flex justify-end m-auto">
      <div className="w-full max-w-[330px] min-xs:max-w-[241px] lg:max-w-[341px] xl:max-w-[416px]">
        <Button size="full" variant="second" text={t('button')} link="/new-partner" />
      </div>
      </div>
    </div>
  )
}

export default Partners;
