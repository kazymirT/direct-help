"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { FC } from 'react'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaArrow'
import { SliderProps } from './types'
import Image from 'next/image'
import { DotButton, useDotButton } from './EmblaDots'

const Slider: FC<SliderProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla m-auto max-w-[1389px] px-6">
      <div className="embla__viewport overflow-x-clip overflow-y-visible relative z-10" ref={emblaRef}>
        <div className="embla__container flex ml-0">
          {slides.map(({ id, slide }) => (
            <Image src={slide} key={id} width={277} height={344} alt={''} className='embla__slide flex-[0_0_20%] mr-2 w-[277px] h-[344px]' />
))}
        </div>
      <div className="w-full absolute top-1/2 left-2 -translate-y-1/2">
        <div className="flex justify-between w-[99%]">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

      </div>
        <div className="embla__dots flex gap-[27px] z-20 absolute -bottom-19 left-1/2 -translate-x-1/2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot w-5 h-5 bg-[#f8b428] rounded-full cursor-pointer'.concat(
                index === selectedIndex ? ' embla__dot--selected bg-yellow-600' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider