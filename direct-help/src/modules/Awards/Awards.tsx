import Slider from "../SliderAwards/Slider"
import { EmblaOptionsType } from 'embla-carousel'
import { AWARDS_SLIDE } from "./data"

const OPTIONS: EmblaOptionsType = { loop: true, align: 'start' }

const Awards = () => {
  return (
    <section className="w-full flex gap-[42px] flex-col items-center justify-center pt-[117px] pb-[209px]">
      <div className="w-full max-w-[1258px]">
        <h2 className="text-text2 font-medium text-[40px]">Нагороди та подяки фонду</h2>
      </div>
      <Slider options={OPTIONS} slides={AWARDS_SLIDE} />
    </section>
  )
}

export default Awards