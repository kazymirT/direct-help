import DonateForm from '@/modules/Forms/DonateForm/DonateForm';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.donate' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function Donate({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('payment');
  return (
    <div className="flex w-full justify-center bg-[#fdf9f0]">
      <section className="wrapper m-auto flex flex-col pt-5 md:gap-4 md:pt-6 md:pb-10 lg:gap-5 lg:pb-15 xl:gap-15 xl:pb-[299px]">
        <div className="text-[clamp(1.25rem,0.889rem+1.541vw,1.875rem)] lg:text-[clamp(1.25rem,0.889rem+1.541vw,1.875rem)]">
          <h2 className="m-auto w-full max-w-[1064px] leading-[1.215] text-[#2e2c2c] lg:font-medium">
            {t('title.one')}
          </h2>
          <h2 className="m-auto w-full max-w-[1064px] leading-[1.15] text-[#2e2c2c] lg:font-medium">
            {t('title.two')}
          </h2>
        </div>
        <DonateForm />
      </section>
    </div>
  );
}
