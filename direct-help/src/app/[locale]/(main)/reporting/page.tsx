import ReportingBanner from "@/modules/ReportingBanner/ReportingBanner";
import ReportingList from "@/modules/ReportingList/ReportingList";

export default function Reporting() {
  return (
    <div className="flex flex-col items-center gap-3 xs:gap-6 sm:gap-8 md:gap-9 lg:gap-7 xl:gap-18 pb-14 xs:pb-20 sm:pb-30 md:pb-40 lg:pb-45 xl:pb-50">
      <ReportingBanner />
      <ReportingList />
    </div>
  );
}
