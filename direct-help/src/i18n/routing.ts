import {defineRouting} from 'next-intl/routing';
import { locales } from './locales';
export const routing = defineRouting({
  locales,
 
  defaultLocale: locales[0]
});
