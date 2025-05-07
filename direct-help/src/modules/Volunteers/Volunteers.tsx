import { EmblaOptionsType } from 'embla-carousel'
import Slider from '../SliderVolunteers/Slider';
import { SLIDES_DATA } from './data';
import { getTranslations } from 'next-intl/server';

const OPTIONS: EmblaOptionsType = { loop: true }

export interface Slide {
  id: number;
  count: string;
  image: string;  
}

export interface SlidesData {
  one: Slide;
  two: Slide;
}

const Volunteers = async () => {
  const t = await getTranslations('home.volunteers');
  return (
    <section className="pt-11 md:pt-9 lg:pt-9.5 xl:pt-16.5 flex justify-center">
      <div className='flex flex-col gap-4 sm:gap-6 md:gap-7 lg:gap-[33px] wrapper'>
      <h2 className='text-[clamp(1.563rem,1.32rem+1.033vw,2.25rem)] font-medium text-text2 leading-[1.1]'>{t('title')}</h2>
      <Slider slides={SLIDES_DATA} options={OPTIONS} />
      </div>
    </section>
  )
}

export default Volunteers