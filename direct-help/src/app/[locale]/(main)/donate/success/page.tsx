import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({params}: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.donate' });

  return {
    title: t('title'),
    description: t('description')
  }
};

export default async function Donate({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <h2>Success pay</h2>
  );
}
