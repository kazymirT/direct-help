'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { FC } from 'react';
import { SliderProps } from './types';
import Image from 'next/image';
import AutoScroll from 'embla-carousel-auto-scroll';

const Slider: FC<SliderProps> = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({
      speed: 0.5,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
      stopOnInteraction: false,
    }),
  ]);

  return (
    <section className="embla w-full overflow-hidden">
      <div
        className="embla__viewport relative z-10 w-full overflow-x-visible"
        ref={emblaRef}
      >
        <div className="embla__container ml-0 flex w-full">
          {slides.map(({ id, slide }) => (
            <Image
              src={slide}
              key={id}
              width={88}
              height={344}
              alt={''}
              className="embla__slide embla__slide mr-0.5 aspect-[0.81] w-full max-w-[clamp(5.75rem,1.415rem+18.498vw,18.063rem)] min-w-[clamp(5.75rem,1.415rem+18.498vw,18.063rem)] rounded-lg border-2 border-[#3d69d8] min-[1440px]:min-w-[clamp(18.063rem,-0.875rem+21.042vw,24.375rem)] lg:mr-1.5 lg:rounded-3xl lg:border-[6px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
