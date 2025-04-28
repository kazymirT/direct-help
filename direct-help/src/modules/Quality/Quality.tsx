import Image from "next/image"
import { QUALITY_DATA } from "./data"
import { getTranslations } from "next-intl/server";

const Quality = async () => {
  const t = await getTranslations('home.quality');
  return (
    <div className="w-full bg-gradient-quality pt-[75px] pb-15 flex justify-center">
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