import { EmblaOptionsType } from 'embla-carousel'

import { SlidesData } from "../Volunteers/Volunteers";

export interface SliderProps {
  slides: SlidesData[];
  options?: EmblaOptionsType;
}
