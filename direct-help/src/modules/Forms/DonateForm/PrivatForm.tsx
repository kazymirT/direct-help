import Image from 'next/image';
import ClipboardButton from '@/components/ClipboardButton/ClipboardButton';
import { getTranslations } from 'next-intl/server';

const PrivatForm = async () => {
  const t = await getTranslations('form.payment.privat');
  return (
    <section className="flex w-full flex-col gap-[10px] pt-10 sm:pt-9 md:pt-8 lg:gap-0 lg:pt-1 xl:gap-2 xl:pt-6">
      <h3 className="text-[clamp(1.5rem,1.319rem+0.77vw,1.813rem)] leading-[1.1] text-[#1b1a1a] lg:text-[clamp(1.813rem,0.736rem+1.683vw,2.25rem)]">
        {t('title')}
      </h3>
      <Image
        alt="privatBank"
        src="/support/privat24.svg"
        className="max-md:self-center lg:w-[295px] xl:w-[365px]"
        width={205}
        height={78}
      />
      <div className="flex w-full items-center justify-between pr-3 lg:max-w-[550px] lg:pt-[30px] xl:max-w-[738px] xl:pt-5">
        <div className="text-xs leading-[1.15] font-light text-[#262222] sm:text-sm md:text-base lg:text-[clamp(1rem,0.385rem+0.962vw,1.25rem)]">
          <p>{t('details-one')}</p>
          <p>{t('details-two')}</p>
          <p>{t('details-three')}</p>
          <p>{t('details-four')}</p>
          <p>{t('details-five')}</p>
        </div>
        <ClipboardButton textToCopy={t('details')} />
      </div>
    </section>
  );
};

export default PrivatForm;
