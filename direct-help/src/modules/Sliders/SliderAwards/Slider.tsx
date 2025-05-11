"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { FC } from 'react'
import { SliderProps } from './types'
import Image from 'next/image'
import AutoScroll from 'embla-carousel-auto-scroll'

const Slider: FC<SliderProps> = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [AutoScroll({ speed: 0.5, stopOnMouseEnter: true, stopOnFocusIn: true, stopOnInteraction: false})])

  return (
    <section className="embla overflow-hidden w-full">
      <div className="embla__viewport overflow-x-visible relative z-10 w-full" ref={emblaRef}>
        <div className="embla__container flex ml-0 w-full">
          {slides.map(({ id, slide }) => (
            <Image src={slide} key={id} width={88} height={344} alt={''} className='embla__slide w-full min-w-[clamp(5.75rem,1.415rem+18.498vw,18.063rem)] max-w-[clamp(5.75rem,1.415rem+18.498vw,18.063rem)] aspect-[0.81] min-[1440px]:min-w-[clamp(18.063rem,-0.875rem+21.042vw,24.375rem)] mr-0.5 lg:mr-1.5 border-2 lg:border-[6px] rounded-lg lg:rounded-3xl border-[#3d69d8] embla__slide' />
))}
        </div>
      </div>
    </section>
  )
}

export default Slider