import { useTranslations } from 'next-intl';
import Image from 'next/image';

const SuccessForm = () => {
  const t = useTranslations('form.success');
  return (
    <section className="wrapper xs:pt-6 flex flex-col items-center gap-1 pt-4 pb-19 pl-1 sm:pt-8 md:pt-12 lg:pt-15 xl:pt-19">
      <h1 className="self-start text-[clamp(1.5rem,1.356rem+0.616vw,1.75rem)] leading-[1.2] text-[#2f2d2d]">
        {t('title')}
      </h1>
      <Image
        alt="form success send"
        src="/form-success.png"
        width={190}
        height={190}
        className="size-[clamp(11.875rem,7.188rem+20vw,25.188rem)]"
      />
    </section>
  );
};

export default SuccessForm;
