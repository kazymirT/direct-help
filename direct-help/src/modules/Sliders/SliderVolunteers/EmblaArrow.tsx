import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import Image from 'next/image';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<'button'>;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev flex size-10 items-center justify-center rounded-full bg-[#e4e6e9] transition-all duration-300 active:bg-[#c8cad2] disabled:bg-[#f8faff] md:hover:cursor-pointer md:hover:bg-[#d9dadd] xl:size-15"
      type="button"
      {...restProps}
    >
      <Image
        alt="prev slide"
        src="/icons/slider-arrow.svg"
        width={22}
        height={18}
        className="xl:h-[24px] xl:w-[28px]"
      />
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next flex items-center justify-center rounded-full bg-[#e4e6e9] transition-all duration-300 active:bg-[#c8cad2] disabled:bg-[#f8faff] md:hover:cursor-pointer md:hover:bg-[#d9dadd] lg:size-10 xl:size-15"
      type="button"
      {...restProps}
    >
      <Image
        alt="prev slide"
        src="/icons/slider-arrow.svg"
        width={22}
        height={18}
        className="rotate-180 xl:h-[24px] xl:w-[28px]"
      />
      {children}
    </button>
  );
};
