import ReportingBanner from "@/modules/ReportingBanner/ReportingBanner";
import ReportingList from "@/modules/ReportingList/ReportingList";

export default function Reporting() {
  return (
    <div className="flex flex-col items-center gap-18 pb-50">
      <ReportingBanner />
      <ReportingList />
    </div>
  );
}
