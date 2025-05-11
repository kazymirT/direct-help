import { Link } from "@/i18n/navigation";
import { Reporting } from "@/modules/Reporting/ReportingList/data"
import { getTranslations } from "next-intl/server";
import Image from "next/image"
import { FC } from "react"

const ReportingCard: FC<Reporting> = async ({ image, name, video }) => {
  const t = await getTranslations('reporting.list');
  return (
    <Link href={`/reporting/video/${video}`} scroll={false} className="flex flex-col gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-[22px] border-2 border-[#bfc1c2] rounded-md px-2 xs:px-3 sm:px-4 md:px-5 lg:px-[21px] pt-[6px] md:pt-2 lg:pt-[10px] pb-2 xs:pb-3 sm:pb-4 md:pb-5 lg:pb-6 shadow-reporting-card w-full min-w-[156px] max-w-[410px]">
      <Image alt="alt" src={image} width={136} height={170} className="w-full object-cover aspect-[0.79]" />
      <h3 className="text-[#1b1a1a] text-[clamp(0.625rem,0.408rem+0.924vw,1rem)] lg:text-[clamp(1rem,-0.231rem+1.923vw,1.5rem)] w-full max-w-[368px] leading-[1.2]">{t(`${name}.title`)}</h3>
    </Link>
  )
}

export default ReportingCard;
