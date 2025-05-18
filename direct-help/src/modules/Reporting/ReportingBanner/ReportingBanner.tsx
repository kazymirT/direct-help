import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const ReportingBanner = async () => {
  const t = await getTranslations('reporting');
  return (
    <section className="reporting relative flex items-center overflow-hidden">
      <div className="wrapper m-auto flex items-center justify-between pt-0 pb-5 lg:pb-16">
        <h1 className="font-third text-[clamp(1.563rem,0rem+6.667vw,6rem)] font-light text-[#fdf9f0]">
          {t('title')}
        </h1>
        <h2 className="xs:max-w-[200px] w-full max-w-[118px] text-[clamp(0.625rem,-0.035rem+2.817vw,2.5rem)] text-[#1b1a1a] md:max-w-[270px] lg:max-w-[330px] xl:max-w-[460px]">
          {t('subtitle')}
        </h2>
      </div>
      <div className="absolute top-[clamp(0.125rem,-0.007rem+0.563vw,0.5rem)] left-1/2 flex h-[150px] w-[30px] -translate-x-1/2 gap-[clamp(0.125rem,-0.051rem+0.751vw,0.625rem)]">
        <Image
          alt="icons"
          src="/reportings/line.svg"
          width={3}
          height={38}
          className="h-[clamp(2.375rem,-0.081rem+10.478vw,6.625rem)] w-[clamp(0.188rem,0.007rem+0.77vw,0.5rem)] xl:h-[150px] xl:w-[10px]"
        />
        <Image
          alt="icons"
          src="/reportings/line.svg"
          width={3}
          height={38}
          className="h-[clamp(2.375rem,-0.081rem+10.478vw,6.625rem)] w-[clamp(0.188rem,0.007rem+0.77vw,0.5rem)] xl:h-[150px] xl:w-[10px]"
        />
        <Image
          alt="icons"
          src="/reportings/line.svg"
          width={3}
          height={38}
          className="h-[clamp(2.375rem,-0.081rem+10.478vw,6.625rem)] w-[clamp(0.188rem,0.007rem+0.77vw,0.5rem)] xl:h-[150px] xl:w-[10px]"
        />
      </div>
      <Image
        alt="icons"
        src="/reportings/line.svg"
        width={3}
        height={38}
        className="absolute right-[clamp(0.5rem,0.211rem+1.233vw,1rem)] bottom-[clamp(0.125rem,-0.092rem+0.924vw,0.5rem)] h-[clamp(2.375rem,-0.081rem+10.478vw,6.625rem)] w-[clamp(0.188rem,0.007rem+0.77vw,0.5rem)] xl:right-[24px] xl:bottom-[10px] xl:h-[150px] xl:w-[10px]"
      />
      <Image
        alt="icons"
        src="/reportings/lines2.svg"
        width={88}
        height={39}
        className="absolute -bottom-[clamp(0.75rem,0.028rem+3.082vw,2rem)] left-[clamp(2.125rem,-0.114rem+9.553vw,6rem)] h-[clamp(2.438rem,-0.018rem+10.478vw,6.688rem)] w-[clamp(5.5rem,-0.025rem+23.575vw,15.063rem)] xl:-bottom-[45px] xl:left-[130px] xl:h-[150px] xl:w-[340px]"
      />
    </section>
  );
};

export default ReportingBanner;
