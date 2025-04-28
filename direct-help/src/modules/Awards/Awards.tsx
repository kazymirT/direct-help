import Slider from "../SliderAwards/Slider"
import { EmblaOptionsType } from 'embla-carousel'
import { AWARDS_SLIDE } from "./data"
import { getTranslations } from "next-intl/server"

const OPTIONS: EmblaOptionsType = { loop: true, align: 'start' }

const Awards = async () => {
  const t = await getTranslations('home');
  return (
    <section className="w-full m-auto flex gap-[36px] flex-col items-end justify-end pt-[109px] pb-[205px]">
      <div className="w-full max-w-[1280px] m-auto">
      <h2 className="text-text2 font-medium text-[40px] self-start">{t('awards')}</h2>
      </div>
      <div className="w-full max-w-[1360px]">
      <Slider options={OPTIONS} slides={AWARDS_SLIDE} />
      </div>
    </section>
  )
}

export default Awards