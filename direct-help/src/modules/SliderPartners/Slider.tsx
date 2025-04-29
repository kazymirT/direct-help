"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { FC } from 'react'
import { SliderProps } from './types'
import Image from 'next/image'
import AutoScroll from 'embla-carousel-auto-scroll'

const Slider: FC<SliderProps> = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [AutoScroll({ stopOnMouseEnter: true, stopOnFocusIn: true, stopOnInteraction: false })])

  return (
    <section className="embla overflow-hidden w-full">
      <div className="embla__viewport overflow-x-visible relative z-10" ref={emblaRef}>
        <div className="embla__container flex ml-0">
          {slides.map(({ id, slide }) => (
              <Image key={id} src={slide} width={262} height={212} alt={''} className='w-full min-w-[262px] max-w-[262px] h-[212px] embla__slide rounded-2xl mr-[6px] border-[6px] border-[#f8b428]' />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider