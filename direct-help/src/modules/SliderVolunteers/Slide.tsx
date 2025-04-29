import Image from "next/image"
import { FC } from "react"
import { SlidesData } from "../Volunteers/Volunteers";
import { useTranslations } from "next-intl";

const Slide: FC<SlidesData> = ({ one, two }) => {
  const t = useTranslations('home.volunteers.list');

  return (
    <section className="embla__slide transform translate-z-0 flex-none  relative text-black-20 w-full flex pt-10 pb-5 justify-between pl-[146px] pr-0">
      <article className="pt-[96px] flex flex-col gap-[36px] z-20">
        <Image alt={t(`${one.count}.name`)} src={one.image} width={346} height={500} />
        <div>
          <h3 className="font-medium text-3xl text-black-20 leading-[53px]">{t(`${one.count}.name`)}</h3>
          <p className="text-[28px]">{t(`${one.count}.position`)}</p>
          <p className="text-[28px]">{t(`${one.count}.direction`)}</p>
        </div>
      </article>
      <article className="flex flex-col gap-4 z-20 w-full max-w-[480px]">
        <div className="w-full">
        <h3 className="font-medium text-3xl text-black-20 leading-[48px]">{t(`${two.count}.name`)}</h3>
        <p className="text-[28px]">{t(`${two.count}.position`)}</p>
        <p className="w-full max-w-[402px] text-[28px]">{t(`${two.count}.direction`)}</p>
        </div>
        <Image alt={t(`${two.count}.name`)} src={two.image} width={346} height={500} className="" />
      </article>
      <div className="absolute top-11 left-[52.3%] -translate-x-1/2 bg-[#f8b428] h-[771px] w-1"></div>
      <Image className="absolute top-38 right-4 z-10" alt="" src='/slides/circle_blue.svg' width={150} height={340} />
      <Image className="absolute bottom-34 left-14 z-10" alt="" src='/slides/circle_yellow.svg' width={150} height={340} />
      <Image className="absolute top-11 left-23" alt="" src='/slides/lines_blue.svg' width={493} height={40} />
      <Image className="absolute bottom-[35px] right-12" alt="" src='/slides/lines_yellow.svg' width={493} height={40} />
    </section>
  )
}

export default Slide;
