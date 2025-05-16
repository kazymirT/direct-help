import Support from "@/modules/Support/Support";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({params}: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.support' });

  return {
    title: t('title'),
    description: t('description')
  }
};

export default function SupportPage() {
  return (
    <Support />
  );
}
