import Button from '@/components/Button/Button';
import Image from 'next/image';
import { FC } from 'react';
import { Status } from '../FormActions/FormActions';
import { useTranslations } from 'next-intl';

export interface ErrorFormProps {
  onClick: (status: Status) => void;
}

const ErrorForm: FC<ErrorFormProps> = ({ onClick }) => {
  const t = useTranslations('form.error');
  return (
    <section className="wrapper m-auto flex flex-col gap-6 pt-8 pb-[116px] lg:gap-[65px] lg:pt-15">
      <h1 className="text-[clamp(1.5rem,1.412rem+0.376vw,1.75rem)] text-[#1b1a1a] max-md:leading-[1.15]">
        <p className="leading-[1.1]">{t('title')}</p>
        <p>{t('subtitle')}</p>
      </h1>
      <div className="m-auto flex w-full max-w-[320px] flex-col items-center gap-10 lg:max-w-[380px] lg:gap-[59px] xl:max-w-[415px]">
        <Image
          alt="error"
          src="/error.png"
          width={154}
          height={68}
          className="aspect-[2.26] w-[clamp(9.625rem,3.881rem+24.507vw,25.938rem)]"
        />
        <Button
          size="full-s"
          variant="second"
          text={t('button')}
          onClick={() => onClick('idle')}
        />
      </div>
    </section>
  );
};

export default ErrorForm;
