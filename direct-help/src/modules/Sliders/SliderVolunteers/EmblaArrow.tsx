import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import Image from 'next/image'

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button embla__button--prev size-10 xl:size-15 bg-[#e4e6e9] rounded-full flex justify-center items-center md:hover:bg-[#d9dadd] active:bg-[#c8cad2] disabled:bg-[#f8faff] transition-all duration-300 md:hover:cursor-pointer"
      type="button"
      {...restProps}
    >
      <Image alt='prev slide' src='/icons/slider-arrow.svg' width={22} height={18} className='xl:w-[28px] xl:h-[24px]' />
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button embla__button--next lg:size-10 xl:size-15 bg-[#e4e6e9] rounded-full flex justify-center items-center md:hover:bg-[#d9dadd] active:bg-[#c8cad2] disabled:bg-[#f8faff] transition-all duration-300 md:hover:cursor-pointer"
      type="button"
      {...restProps}
    >
      <Image alt='prev slide' src='/icons/slider-arrow.svg' width={22} height={18} className='rotate-180 xl:w-[28px] xl:h-[24px]' />
      {children}
    </button>
  )
}
