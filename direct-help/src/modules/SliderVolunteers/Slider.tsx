"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { FC } from 'react'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaArrow'
import Slide from './Slide'
import { SliderProps } from './types'

const Slider: FC<SliderProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla max-w-[1280px] w-full m-auto bg-[#f5f4f2] px-6">
      <div className="embla__viewport overflow-hidden relative z-10" ref={emblaRef}>
        <div className="embla__container flex ml-0">
          {slides.map((index) => (
            <Slide key={index.one.id} {...index} />
          ))}
        </div>
        <div className="max-md:hidden w-full absolute top-[47%] left-0 -translate-y-1/2">
          <div className="flex justify-between">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider