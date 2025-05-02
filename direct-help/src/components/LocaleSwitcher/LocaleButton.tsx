'use client';

import {useParams} from 'next/navigation';
import {FC, useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import clsx from 'clsx';

export interface LocaleSwitcherProps {
  local: string;
  name: string;
}

const LocaleButton: FC<LocaleSwitcherProps> = ({ local, name}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const onChangeLocal = () => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        {pathname, params},
        {locale: local}
      );
    });
  }
  const buttonCN = clsx('text-[10px] xs:text-[clamp(0.625rem,0.184rem+1.471vw,1.125rem)] uppercase cursor-pointer leading-1 disabled:cursor-auto', {
    ['text-[#2E2C2C]']: locale !== local,
    ['text-[#1B1A1A]']: locale === local,
  })
  return (
    <button 
      disabled={isPending || local === locale}
      onClick={onChangeLocal}
      className={buttonCN}>
      {name}
    </button>
  );
}

export default LocaleButton;
