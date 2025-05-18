import Image from 'next/image';
import { FC } from 'react';
import { SlidesData } from '../../Home/Volunteers/Volunteers';
import { useTranslations } from 'next-intl';

const Slide: FC<SlidesData> = ({ one, two }) => {
  const t = useTranslations('home.volunteers.list');

  return (
    <section className="embla__slide text-black-20 relative ml-6 flex w-full flex-none translate-z-0 transform justify-between pt-[clamp(0.75rem,-0.261rem+4.314vw,2.5rem)] pr-0 pb-5 md:pl-[clamp(0rem,-11.25rem+23.438vw,3.75rem)] lg:pt-10 lg:pl-[clamp(3.75rem,-9.481rem+20.673vw,9.125rem)]">
      <article className="z-20 flex flex-col gap-2.5 pt-[clamp(1.5rem,0.055rem+6.163vw,4rem)] max-lg:pl-5 lg:gap-[clamp(1.5rem,-0.346rem+2.885vw,2.25rem)] lg:pt-[clamp(4rem,-0.923rem+7.692vw,6rem)]">
        <Image
          alt={t(`${one.count}.name`)}
          src={one.image}
          width={86}
          height={124}
          className="aspect-[0.7] min-w-[clamp(5.375rem,-1.125rem+27.735vw,16.625rem)] lg:min-w-[clamp(16.625rem,4.317rem+19.231vw,21.625rem)]"
        />
        <div>
          <h3 className="text-black-20 text-[clamp(0.438rem,-0.14rem+2.465vw,1.438rem)] leading-[1.9] font-medium lg:text-[clamp(1.438rem,0.361rem+1.683vw,1.875rem)]">
            {t(`${one.count}.name`)}
          </h3>
          <p className="text-[clamp(0.375rem,-0.167rem+2.311vw,1.313rem)] lg:text-[clamp(1.313rem,0.236rem+1.683vw,1.75rem)]">
            {t(`${one.count}.position`)}
          </p>
          <p className="text-[clamp(0.375rem,-0.167rem+2.311vw,1.313rem)] lg:text-[clamp(1.313rem,0.236rem+1.683vw,1.75rem)]">
            {t(`${one.count}.direction`)}
          </p>
        </div>
      </article>
      <article className="z-20 flex w-full max-w-[clamp(6.875rem,-0.348rem+30.817vw,19.375rem)] flex-col gap-2 lg:max-w-[clamp(19.375rem,-6.779rem+40.865vw,30rem)] xl:gap-4">
        <div className="w-full">
          <h3 className="text-black-20 text-[clamp(0.438rem,-0.14rem+2.465vw,1.438rem)] leading-[1.65] font-medium lg:text-[clamp(1.438rem,0.361rem+1.683vw,1.875rem)]">
            {t(`${two.count}.name`)}
          </h3>
          <p className="text-[clamp(0.375rem,-0.167rem+2.311vw,1.313rem)] lg:text-[clamp(1.313rem,0.236rem+1.683vw,1.75rem)]">
            {t(`${two.count}.position`)}
          </p>
          <p className="w-full max-w-[402px] text-[clamp(0.375rem,-0.167rem+2.311vw,1.313rem)] lg:text-[clamp(1.313rem,0.236rem+1.683vw,1.75rem)]">
            {t(`${two.count}.direction`)}
          </p>
        </div>
        <Image
          alt={t(`${two.count}.name`)}
          src={two.image}
          width={86}
          height={124}
          className="aspect-[0.7] w-[clamp(5.375rem,-1.125rem+27.735vw,16.625rem)] lg:w-[clamp(16.625rem,4.317rem+19.231vw,21.625rem)]"
        />
      </article>
      <div className="absolute top-1/2 left-1/2 h-[clamp(12rem,-2.445rem+61.633vw,37rem)] w-0.5 -translate-x-1/2 -translate-y-1/2 bg-[#f8b428] lg:h-[clamp(37rem,9.462rem+43.029vw,48.188rem)] lg:w-1"></div>
      <Image
        className="absolute bottom-[clamp(3rem,0.689rem+9.861vw,7rem)] left-0 z-10 aspect-[0.44] w-[clamp(2.313rem,-0.504rem+12.018vw,7.188rem)] lg:bottom-28 lg:w-[clamp(7.188rem,1.803rem+8.413vw,9.375rem)] xl:bottom-34 xl:left-14"
        alt=""
        src="/slides/circle_yellow.svg"
        width={115}
        height={261}
      />
      <Image
        className="absolute top-[clamp(2.5rem,-0.389rem+12.327vw,7.5rem)] right-[clamp(0rem,-2.462rem+3.846vw,1rem)] z-10 aspect-[0.44] w-[clamp(2.313rem,-0.504rem+12.018vw,7.188rem)] lg:top-[clamp(7.5rem,2.577rem+7.692vw,9.5rem)] lg:w-[clamp(7.188rem,1.803rem+8.413vw,9.375rem)]"
        alt=""
        src="/slides/circle_blue.svg"
        width={115}
        height={261}
      />
      <Image
        className="absolute top-[clamp(0.75rem,-0.044rem+3.39vw,2.125rem)] left-[clamp(0.5rem,0.211rem+1.233vw,1rem)] aspect-[12] w-[clamp(7.688rem,-1.594rem+39.599vw,23.75rem)] lg:top-[clamp(2.125rem,0.587rem+2.404vw,2.75rem)] lg:left-[clamp(1rem,-10.692rem+18.269vw,5.75rem)] lg:w-[clamp(23.75rem,6.365rem+27.163vw,30.813rem)]"
        alt=""
        src="/slides/lines_blue.svg"
        width={493}
        height={40}
      />
      <Image
        className="xs:bottom-[16px] absolute right-[clamp(0.25rem,-0.328rem+2.465vw,1.25rem)] bottom-[22px] aspect-[12] w-[clamp(7.688rem,-1.594rem+39.599vw,23.75rem)] lg:right-[clamp(1.25rem,-3.058rem+6.731vw,3rem)] lg:bottom-[32px] lg:w-[clamp(23.75rem,6.365rem+27.163vw,30.813rem)] xl:bottom-[35px]"
        alt=""
        src="/slides/lines_yellow.svg"
        width={493}
        height={40}
      />
    </section>
  );
};

export default Slide;
