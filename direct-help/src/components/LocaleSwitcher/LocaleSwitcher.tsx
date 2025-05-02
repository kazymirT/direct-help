import { LOCAL_LINKS } from '@/modules/Header/data';
import LocaleButton from './LocaleButton';
import { Fragment } from 'react';

const LocaleSwitcher = () => {
  return (
    <nav className='flex gap-[9px] min-lg:gap-1 h-fit items-center'>
      {LOCAL_LINKS.map(({ id, ...props }) => (
        <Fragment key={id}>
        {id > 1 && <span className='hidden min-md:block text-[#2E2C2C] text-3xl leading-6'>|</span>}
        <LocaleButton {...props} />
        </Fragment>
      ))}
    </nav>
  );
}

export default LocaleSwitcher;
