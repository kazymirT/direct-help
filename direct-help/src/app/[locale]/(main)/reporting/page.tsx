import ReportingBanner from '@/modules/Reporting/ReportingBanner/ReportingBanner';
import ReportingList from '@/modules/Reporting/ReportingList/ReportingList';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.reporting' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function Reporting() {
  return (
    <div className="xs:gap-6 xs:pb-20 flex flex-col items-center gap-3 pb-14 sm:gap-8 sm:pb-30 md:gap-9 md:pb-40 lg:gap-7 lg:pb-45 xl:gap-18 xl:pb-50">
      <ReportingBanner />
      <ReportingList />
    </div>
  );
}
