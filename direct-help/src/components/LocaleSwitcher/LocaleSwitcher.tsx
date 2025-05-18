import { LOCAL_LINKS } from '@/modules/Header/data';
import LocaleButton from './LocaleButton';
import { Fragment } from 'react';

const LocaleSwitcher = () => {
  return (
    <nav className="flex h-fit items-center gap-[9px] min-lg:gap-1">
      {LOCAL_LINKS.map(({ id, ...props }) => (
        <Fragment key={id}>
          {id > 1 && (
            <span className="hidden text-3xl leading-6 text-[#2E2C2C] min-md:block">
              |
            </span>
          )}
          <LocaleButton {...props} />
        </Fragment>
      ))}
    </nav>
  );
};

export default LocaleSwitcher;
