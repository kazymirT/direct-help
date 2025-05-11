import ReportingBanner from "@/modules/Reporting/ReportingBanner/ReportingBanner";
import ReportingList from "@/modules/Reporting/ReportingList/ReportingList";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({params}: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.reporting' });

  return {
    title: t('title'),
    description: t('description')
  }
};

export default function Reporting() {
  return (
    <div className="flex flex-col items-center gap-3 xs:gap-6 sm:gap-8 md:gap-9 lg:gap-7 xl:gap-18 pb-14 xs:pb-20 sm:pb-30 md:pb-40 lg:pb-45 xl:pb-50">
      <ReportingBanner />
      <ReportingList />
    </div>
  );
}
