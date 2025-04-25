import { REPORTING_DATA } from "./data"
import ReportingCard from "@/components/ReportingCard/ReportingCard"

const ReportingList = () => {
  return (
    <section className="w-full max-w-[1280px] flex flex-col gap-17">
      <h2 className="text-4xl text-[#1b1a1a] w-full max-w-[852px] leading-[1.2]">
        Успішно виконані запити на доставку автомобілів з-за кордону для військовослужбовців
      </h2>
      <div className="flex flex-wrap gap-x-[20px] gap-y-[64px]">
        {REPORTING_DATA.map((data) => (
          <ReportingCard key={data.id} {...data}  />        
        ))}
      </div>
    </section>
  )
}

export default ReportingList;
