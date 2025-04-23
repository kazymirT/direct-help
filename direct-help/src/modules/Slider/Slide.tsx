import Image from "next/image"
import { FC } from "react"
import { SlidesData } from "../Volunteers/Volunteers";

const Slide: FC<SlidesData> = ({ one, two }) => {
  return (
    <section className="embla__slide relative text-black-20 w-full flex pt-10 pb-5 justify-between pl-[146px] pr-[135px]">
      <article className="pt-[96px] flex flex-col gap-[36px] z-20">
        <Image alt={one.name} src={one.image} width={346} height={500} />
        <div>
          <h3 className="font-medium text-3xl text-black-20 leading-[53px]">{one.name}</h3>
          <p className="text-[28px]">{one.direction}</p>
          <p className="text-[28px]">{one.position}</p>
        </div>
      </article>
      <article className="flex flex-col gap-4 z-20">
        <div className="w-full">
        <h3 className="font-medium text-3xl text-black-20 leading-[48px]">{two.name}</h3>
        <p className="w-full max-w-[402px] text-[28px]">{two.direction}</p>
        <p className="text-[28px]">{two.position}</p>
        </div>
        <Image alt={two.name} src={two.image} width={346} height={500} className="" />
      </article>
      <div className="absolute top-11 left-1/2 bg-[#f8b428] h-[771px] w-1"></div>
      <Image className="absolute top-38 right-19 z-10" alt="" src='/slides/circle_blue.svg' width={150} height={340} />
      <Image className="absolute bottom-34 left-14 z-10" alt="" src='/slides/circle_yellow.svg' width={150} height={340} />
      <Image className="absolute top-11 left-23" alt="" src='/slides/lines_blue.svg' width={493} height={40} />
      <Image className="absolute bottom-[35px] right-27" alt="" src='/slides/lines_yellow.svg' width={493} height={40} />
    </section>
  )
}

export default Slide;
