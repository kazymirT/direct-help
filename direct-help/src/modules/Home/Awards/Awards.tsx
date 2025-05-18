import Slider from '../../Sliders/SliderAwards/Slider';
import { EmblaOptionsType } from 'embla-carousel';
import { AWARDS_SLIDE } from './data';
import { getTranslations } from 'next-intl/server';

const OPTIONS: EmblaOptionsType = { loop: true, align: 'start' };

const Awards = async () => {
  const t = await getTranslations('home');
  return (
    <section className="xs:gap-6 xs:pt-6 xs:pb-12 m-auto flex w-full max-w-[1920px] flex-col items-end justify-end gap-4 pt-4 pb-9 sm:gap-7 sm:pt-8 sm:pb-15 md:gap-8 md:pt-10 md:pb-20 lg:gap-9 lg:pt-12 lg:pb-30 xl:gap-10.5 xl:pt-15 xl:pb-35">
      <div className="wrapper">
        <h2 className="text-text2 self-start pl-1 text-[clamp(1.5rem,1.356rem+0.616vw,1.75rem)] md:font-medium lg:text-[clamp(1.75rem,0.519rem+1.923vw,2.25rem)]">
          {t('awards')}
        </h2>
      </div>
      <div className="w-full">
        <Slider options={OPTIONS} slides={AWARDS_SLIDE} />
      </div>
    </section>
  );
};

export default Awards;
