import { Reporting } from "@/modules/ReportingList/data"
import { getTranslations } from "next-intl/server";
import Image from "next/image"
import { FC } from "react"

const ReportingCard: FC<Reporting> = async ({ image, name }) => {
  const t = await getTranslations('reporting.list');
  return (
    <article className="flex flex-col gap-[22px] border-2 border-[#bfc1c2] rounded-md px-[21px] pt-[10px] pb-6 shadow-reporting-card">
      <Image alt="alt" src={image} width={368} height={461} className="h-[461px] object-cover" />
      <h3 className="text-[#1b1a1a] text-2xl w-full max-w-[368px] leading-[1.2]">{t(`${name}.title`)}</h3>
    </article>
  )
}

export default ReportingCard;
