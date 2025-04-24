import { EmblaOptionsType } from 'embla-carousel'
import Slider from '../SliderVolunteers/Slider';
import { SLIDES_DATA } from './data';

const OPTIONS: EmblaOptionsType = { loop: true }

export interface Slide {
  id: number;
  name: string;
  position: string;
  direction: string;
  image: string;  
}

export interface SlidesData {
  one: Slide;
  two: Slide;
}

const Volunteers = () => {
  return (
    <section className="pt-[108px] flex justify-center">
      <div className='flex flex-col gap-[49px]'>
      <h2 className='text-[40px] font-medium text-text2 leading-[41px] pl-[33px] pt-1'>Наші волонтери</h2>
      <Slider slides={SLIDES_DATA} options={OPTIONS} />
      </div>
    </section>
  )
}

export default Volunteers