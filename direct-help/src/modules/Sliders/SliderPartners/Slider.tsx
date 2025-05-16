"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { FC } from 'react'
import { SliderProps } from './types'
import Image from 'next/image'
import AutoScroll from 'embla-carousel-auto-scroll'

const Slider: FC<SliderProps> = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [AutoScroll({ speed: 1, stopOnMouseEnter: true, stopOnFocusIn: true, stopOnInteraction: false })])

  return (
    <section className="embla overflow-hidden w-full">
      <div className="embla__viewport overflow-x-visible relative z-10" ref={emblaRef}>
        <div className="embla__container flex ml-0">
          {slides.map(({ id, slide }) => (
              <Image key={id} src={slide} width={168} height={136} alt={''} className='w-full min-w-[clamp(10.5rem,8.431rem+8.826vw,16.375rem)] max-w-[clamp(10.5rem,8.431rem+8.826vw,16.375rem)] aspect-[1.24]  mr-[6px] border-[6px] rounded-2xl bg-[#ffffff] border-[#f8b428] embla__slide' />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider