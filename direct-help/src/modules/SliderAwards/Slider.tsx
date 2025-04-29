"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { FC } from 'react'
import { SliderProps } from './types'
import Image from 'next/image'
import AutoScroll from 'embla-carousel-auto-scroll'

const Slider: FC<SliderProps> = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [AutoScroll({ stopOnMouseEnter: true, stopOnFocusIn: true, stopOnInteraction: false})])

  return (
    <section className="embla overflow-hidden w-full">
      <div className="embla__viewport overflow-x-visible relative z-10 w-full" ref={emblaRef}>
        <div className="embla__container flex ml-0 w-full">
          {slides.map(({ id, slide }) => (
            <Image src={slide} key={id} width={277} height={344} alt={''} className='embla__slide w-1/5 min-w-[289px] aspect-[277/344] min-[1440px]:min-w-[clamp(18.063rem,-0.875rem+21.042vw,24.375rem)] mr-[6px] border-[6px] border-[#3d69d8] rounded-3xl h-auto' />
))}
        </div>
      </div>
    </section>
  )
}

export default Slider