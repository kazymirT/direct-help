import Image from "next/image"
import { FC } from "react"
import { SlidesData } from "../Volunteers/Volunteers";
import { useTranslations } from "next-intl";

const Slide: FC<SlidesData> = ({ one, two }) => {
  const t = useTranslations('home.volunteers.list');

  return (
    <section className="ml-6 embla__slide transform translate-z-0 flex-none relative text-black-20 w-full flex pt-[clamp(0.75rem,-0.261rem+4.314vw,2.5rem)] lg:pt-10 pb-5 justify-between md:pl-[clamp(0rem,-11.25rem+23.438vw,3.75rem)] lg:pl-[clamp(3.75rem,-9.481rem+20.673vw,9.125rem)] pr-0">
      <article className="max-lg:pl-5 pt-[clamp(1.5rem,0.055rem+6.163vw,4rem)] lg:pt-[clamp(4rem,-0.923rem+7.692vw,6rem)] flex flex-col gap-2.5 lg:gap-[clamp(1.5rem,-0.346rem+2.885vw,2.25rem)] z-20">
        <Image alt={t(`${one.count}.name`)} src={one.image} width={86} height={124} className="aspect-[0.7] min-w-[clamp(5.375rem,-1.125rem+27.735vw,16.625rem)] lg:min-w-[clamp(16.625rem,4.317rem+19.231vw,21.625rem)]" />
        <div>
          <h3 className="font-medium text-[clamp(0.438rem,-0.14rem+2.465vw,1.438rem)] lg:text-[clamp(1.438rem,0.361rem+1.683vw,1.875rem)] text-black-20 leading-[1.9]">{t(`${one.count}.name`)}</h3>
          <p className="text-[clamp(0.375rem,-0.167rem+2.311vw,1.313rem)] lg:text-[clamp(1.313rem,0.236rem+1.683vw,1.75rem)]">{t(`${one.count}.position`)}</p>
          <p className="text-[clamp(0.375rem,-0.167rem+2.311vw,1.313rem)] lg:text-[clamp(1.313rem,0.236rem+1.683vw,1.75rem)]">{t(`${one.count}.direction`)}</p>
        </div>
      </article>
      <article className="flex flex-col gap-2 xl:gap-4 z-20 w-full max-w-[clamp(6.875rem,-0.348rem+30.817vw,19.375rem)] lg:max-w-[clamp(19.375rem,-6.779rem+40.865vw,30rem)]">
        <div className="w-full">
        <h3 className="font-medium text-[clamp(0.438rem,-0.14rem+2.465vw,1.438rem)] lg:text-[clamp(1.438rem,0.361rem+1.683vw,1.875rem)] text-black-20 leading-[1.65]">{t(`${two.count}.name`)}</h3>
        <p className="text-[clamp(0.375rem,-0.167rem+2.311vw,1.313rem)] lg:text-[clamp(1.313rem,0.236rem+1.683vw,1.75rem)]">{t(`${two.count}.position`)}</p>
        <p className="w-full max-w-[402px] text-[clamp(0.375rem,-0.167rem+2.311vw,1.313rem)] lg:text-[clamp(1.313rem,0.236rem+1.683vw,1.75rem)]">{t(`${two.count}.direction`)}</p>
        </div>
        <Image alt={t(`${two.count}.name`)} src={two.image} width={86} height={124} className="aspect-[0.7] w-[clamp(5.375rem,-1.125rem+27.735vw,16.625rem)] lg:w-[clamp(16.625rem,4.317rem+19.231vw,21.625rem)]"  />
      </article>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#f8b428] h-[clamp(12rem,-2.445rem+61.633vw,37rem)] lg:h-[clamp(37rem,9.462rem+43.029vw,48.188rem)] w-0.5 lg:w-1"></div>
      <Image className="absolute w-[clamp(2.313rem,-0.504rem+12.018vw,7.188rem)] lg:w-[clamp(7.188rem,1.803rem+8.413vw,9.375rem)] aspect-[0.44] bottom-[clamp(3rem,0.689rem+9.861vw,7rem)] lg:bottom-28 xl:bottom-34 left-0 xl:left-14 z-10" alt="" src='/slides/circle_yellow.svg' width={115} height={261} />
      <Image className="absolute w-[clamp(2.313rem,-0.504rem+12.018vw,7.188rem)] lg:w-[clamp(7.188rem,1.803rem+8.413vw,9.375rem)] aspect-[0.44] top-[clamp(2.5rem,-0.389rem+12.327vw,7.5rem)] lg:top-[clamp(7.5rem,2.577rem+7.692vw,9.5rem)] right-[clamp(0rem,-2.462rem+3.846vw,1rem)] z-10" alt="" src='/slides/circle_blue.svg' width={115} height={261} />
      <Image className="absolute w-[clamp(7.688rem,-1.594rem+39.599vw,23.75rem)] lg:w-[clamp(23.75rem,6.365rem+27.163vw,30.813rem)] aspect-[12] top-[clamp(0.75rem,-0.044rem+3.39vw,2.125rem)] lg:top-[clamp(2.125rem,0.587rem+2.404vw,2.75rem)] left-[clamp(0.5rem,0.211rem+1.233vw,1rem)] lg:left-[clamp(1rem,-10.692rem+18.269vw,5.75rem)]" alt="" src='/slides/lines_blue.svg' width={493} height={40} />
      <Image className="absolute w-[clamp(7.688rem,-1.594rem+39.599vw,23.75rem)] lg:w-[clamp(23.75rem,6.365rem+27.163vw,30.813rem)] aspect-[12] bottom-[22px] xs:bottom-[16px] lg:bottom-[32px] xl:bottom-[35px] right-[clamp(0.25rem,-0.328rem+2.465vw,1.25rem)] lg:right-[clamp(1.25rem,-3.058rem+6.731vw,3rem)]" alt="" src='/slides/lines_yellow.svg' width={493} height={40} />
    </section>
  )
}

export default Slide;
