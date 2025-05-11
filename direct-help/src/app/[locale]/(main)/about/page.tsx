import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({params}: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.about' });

  return {
    title: t('title'),
    description: t('description')
  }
};

export default function About() {
  return (
    <section>
      {Array.from({length: 13}).map((_, index) => (
        <Image key={index} src={`/about/about_${index}.png`} alt="" width={1440} height={810} className="w-full h-auto" />
      ))}
    </section>
  );
}
  