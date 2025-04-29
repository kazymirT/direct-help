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

  const wrapperCN = clsx('w-full bg-gradient-quality pt-[75px] flex justify-center', {
    ['pb-21']: isEN,
    ['pb-15']: isUK || isDE,
  });
  return (
    <div className={wrapperCN}>
      <div className="w-full max-w-[1062px] flex justify-between">
      {QUALITY_DATA.map(({ id, image, count }) => (
        <article key={id} className="max-w-[219px] flex flex-col gap-[20px] items-center" >
          <Image src={image} width={48} height={48} alt={`icon for ${t(`${count}.title`)}`} />
          <div className="flex flex-col gap-8">
          <h3 className="font-family self-start font-normal text-[28px] text-text2 leading-[33px]">{t(`${count}.title`)}</h3>
          <p className="font-family font-light text-xl text-text max-w-[207px] leading-[1.16]">{t(`${count}.description`)}</p>
          </div>
        </article>
      ))}
      </div>
    </div>
  )
}

export default Quality