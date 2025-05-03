import { getLocale, getTranslations } from "next-intl/server"
import { REPORTING_DATA } from "./data"
import ReportingCard from "@/components/ReportingCard/ReportingCard"
import clsx from "clsx";

const ReportingList = async () => {
  const t = await getTranslations('reporting');
  const locale = await getLocale();

  const isUK = locale === 'uk';

  const descriptionCN = clsx("text-4xl text-[#2f2d2d] w-full leading-[1.2]", {
    ['max-w-[852px]']: isUK,
    ['max-w-[1063px]']: !isUK
  })
  return (
    <section className="w-full max-w-[1280px] flex flex-col gap-17">
      <h2 className={descriptionCN}>{t('description')}</h2>
      <div className="flex flex-wrap gap-x-[20px] gap-y-[64px]">
        {REPORTING_DATA.map((data) => (
          <ReportingCard key={data.id} {...data}  />        
        ))}
      </div>
    </section>
  )
}

export default ReportingList;
