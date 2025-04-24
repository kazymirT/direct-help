import { EmblaOptionsType } from 'embla-carousel'


export interface SliderProps {
  slides: { id: number; slide: string }[];
  options?: EmblaOptionsType;
}
