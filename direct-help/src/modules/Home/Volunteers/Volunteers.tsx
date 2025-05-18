import { EmblaOptionsType } from 'embla-carousel';
import Slider from '../../Sliders/SliderVolunteers/Slider';
import { SLIDES_DATA } from './data';
import { getTranslations } from 'next-intl/server';

const OPTIONS: EmblaOptionsType = { loop: true };

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
    <section className="flex justify-center pt-11 md:pt-9 lg:pt-9.5 xl:pt-16.5">
      <div className="wrapper flex flex-col gap-4 sm:gap-6 md:gap-7 lg:gap-[33px]">
        <h2 className="text-text2 text-[clamp(1.563rem,1.32rem+1.033vw,2.25rem)] leading-[1.1] font-medium">
          {t('title')}
        </h2>
        <Slider slides={SLIDES_DATA} options={OPTIONS} />
      </div>
    </section>
  );
};

export default Volunteers;
