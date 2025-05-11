import Image from "next/image"
import { QUALITY_DATA } from "./data"
import { getLocale, getTranslations } from "next-intl/server";
import clsx from "clsx";

const Quality = async () => {
  const t = await getTranslations('home.quality');
  const locale = await getLocale();

  const isEN = locale === 'en';
  const isUK = locale === 'uk';
  const isDE = locale === 'de';

  const wrapperCN = clsx('w-full bg-gradient-quality pt-2 sm:pt-8 lg:pt-13.5 xl:pt-[75px] flex justify-center', {
    ['pb-12 lg:pb-15 xl:pb-21']: isEN,
    ['pb-12 lg:pb-10.5 xl:pb-15']: isUK || isDE,
  });
  return (
    <div className={wrapperCN}>
      <div className="wrapper flex justify-center">
        <div className="w-full max-w-[1062px] flex md:justify-between flex-col sm:flex-row max-md:gap-6 max-sm:items-center">
          {QUALITY_DATA.map(({ id, image, count }) => (
            <article key={id} className="w-full md:max-w-[219px] flex flex-col gap-1 xs:gap-3 sm:gap-4 md:gap-[20px] items-center" >
              <Image src={image} width={36} height={36} alt={`icon for ${t(`${count}.title`)}`} className="w-[clamp(2.25rem,1.534rem+3.053vw,3rem)]" />
              <div className="flex flex-col gap-2 md:gap-8 self-start xs:self-center">
                <h3 className="font-family self-start font-normal text-[clamp(1.188rem,-0.197rem+2.163vw,1.75rem)] text-text2 leading-[33px]">{t(`${count}.title`)}</h3>
                <p className="font-family font-light text-base md:text-[clamp(0.875rem,-0.048rem+1.442vw,1.25rem)] text-text w-full xs:max-w-[207px] leading-[1.16]">{t(`${count}.description`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Quality