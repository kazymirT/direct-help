'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { FC } from 'react';
import { SliderProps } from './types';
import Image from 'next/image';
import AutoScroll from 'embla-carousel-auto-scroll';

const Slider: FC<SliderProps> = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({
      speed: 1,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
      stopOnInteraction: false,
    }),
  ]);

  return (
    <section className="embla w-full overflow-hidden">
      <div
        className="embla__viewport relative z-10 overflow-x-visible"
        ref={emblaRef}
      >
        <div className="embla__container ml-0 flex">
          {slides.map(({ id, slide }) => (
            <Image
              key={id}
              src={slide}
              width={168}
              height={136}
              alt={''}
              className="embla__slide mr-[6px] aspect-[1.24] w-full max-w-[clamp(10.5rem,8.431rem+8.826vw,16.375rem)] min-w-[clamp(10.5rem,8.431rem+8.826vw,16.375rem)] rounded-2xl border-[6px] border-[#f8b428] bg-[#ffffff]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
