import { Reporting } from "@/modules/ReportingList/data"
import Image from "next/image"
import { FC } from "react"

const ReportingCard: FC<Reporting> = ({ image, name }) => {
  return (
    <article className="flex flex-col gap-[22px] border-2 border-[#bfc1c2] rounded-md px-[21px] pt-[10px] pb-6 shadow-reporting-card">
      <Image alt="alt" src={image} width={368} height={461} className="max-h-[461px]" />
      <h3 className="text-[#1b1a1a] text-2xl w-full max-w-[368px] leading-[1.2]">{name}</h3>
    </article>
  )
}

export default ReportingCard;
