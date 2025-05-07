import Slider from "../SliderAwards/Slider"
import { EmblaOptionsType } from 'embla-carousel'
import { AWARDS_SLIDE } from "./data"
import { getTranslations } from "next-intl/server"

const OPTIONS: EmblaOptionsType = { loop: true, align: 'start',  }

const Awards = async () => {
  const t = await getTranslations('home');
  return (
    <section className="w-full m-auto flex gap-4 xs:gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10.5 flex-col items-end justify-end pt-4 xs:pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-15 pb-9 xs:pb-12 sm:pb-15 md:pb-20 lg:pb-30 xl:pb-35">
      <div className="wrapper">
      <h2 className="text-text2 md:font-medium text-[clamp(1.5rem,1.356rem+0.616vw,1.75rem)] lg:text-[clamp(1.75rem,0.519rem+1.923vw,2.25rem)] self-start pl-1">{t('awards')}</h2>
      </div>
      <div className="w-full">
      <Slider options={OPTIONS} slides={AWARDS_SLIDE} />
      </div>
    </section>
  )
}

export default Awards