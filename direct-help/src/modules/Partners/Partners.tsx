import Button from "@/components/Button/Button";
import Slider from "../SliderPartners/Slider";
import { PARTNERS_DATA } from "./data";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true, align: 'start', duration: 500, skipSnaps: true }

const Partners = () => {
  return (
    <div className="w-full mt-[72px] flex flex-col items-end gap-[65px]">
      <div className="w-full bg-gradient-partners flex flex-col items-end pb-[92px]">
      <section className="w-full max-w-[1280px] m-auto pb-[30px]">
        <h2 className="font-family text-[40px] leading-[47px] text-text2">Наші партнери</h2>
      </section>
      <div className="w-full max-w-[1364px]">
        <Slider slides={PARTNERS_DATA} options={OPTIONS}  />
      </div>
      </div>
      <div className="w-full max-w-[1280px] flex justify-end m-auto">
      <div className="w-[415px]">
        <Button size="full" variant="second" text="Стати партнером" link="/new-partner" />
      </div>
      </div>
    </div>
  )
}

export default Partners;
