import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'metadata.donate-success',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function Donate({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('donate-success');

  return (
    <section className="wrapper xs:pt-6 flex flex-col items-center gap-1 pt-4 pb-10 pl-1 sm:pt-8 md:pt-12 md:pb-19 lg:pt-15 xl:pt-19">
      <h1 className="text-center text-[clamp(1.5rem,1.356rem+0.616vw,1.75rem)] leading-[1.2] text-[#2f2d2d]">
        {t('title')}
      </h1>
      <h2 className="text-center text-[clamp(1.5rem,1.356rem+0.616vw,1.75rem)] leading-[1.2] text-[#2f2d2d]">
        {t('subtitle')}
      </h2>
      <Image
        alt="form success send"
        src="/form-success.png"
        width={190}
        height={190}
        className="size-[clamp(11.875rem,7.188rem+20vw,25.188rem)]"
      />
    </section>
  );
}
