import { EmblaOptionsType } from 'embla-carousel'
import Slider from '../SliderVolunteers/Slider';
import { SLIDES_DATA } from './data';
import { getTranslations } from 'next-intl/server';

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

const Volunteers = async () => {
  const t = await getTranslations('home.volunteers');
  return (
    <section className="pt-[108px] flex justify-center">
      <div className='flex flex-col gap-[55px] w-full max-w-[1280px] m-auto'>
      <h2 className='text-[40px] font-medium text-text2 leading-[41px] pl-[5px] pt-1'>{t('title')}</h2>
      <Slider slides={SLIDES_DATA} options={OPTIONS} />
      </div>
    </section>
  )
}

export default Volunteers