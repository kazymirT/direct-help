import Partners from '@/modules/Partners/Partners';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.partners' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function PartnersPage() {
  return <Partners />;
}
