import Image from "next/image"
import ClipboardButton from "@/components/ClipboardButton/ClipboardButton"
import { getTranslations } from "next-intl/server";

const PrivatForm = async () => {
  const t = await getTranslations('form.payment.privat');
  return (
    <section className="flex flex-col lg:pt-1 pt-10 sm:pt-9 md:pt-8 xl:pt-6 gap-[10px] lg:gap-0 xl:gap-2 w-full">
      <h3 className="text-[#1b1a1a] text-[clamp(1.5rem,1.319rem+0.77vw,1.813rem)] lg:text-[clamp(1.813rem,0.736rem+1.683vw,2.25rem)] leading-[1.1]">{t('title')}</h3>
      <Image alt="privatBank" src='/support/privat24.svg' className=" lg:w-[295px] xl:w-[365px] max-md:self-center" width={205} height={78} />
      <div className="flex justify-between items-center w-full lg:max-w-[550px] xl:max-w-[738px] lg:pt-[30px] xl:pt-5">
      <div className="text-[#262222] font-light text-[clamp(0.625rem,0.408rem+0.924vw,1rem)] lg:text-[clamp(1rem,0.385rem+0.962vw,1.25rem)] leading-[1.15]">
        <p>{t('details-one')}</p>
        <p>{t('details-two')}</p>
        <p>{t('details-three')}</p>
        <p>{t('details-four')}</p>
        <p>{t('details-five')}</p>
      </div>
      <ClipboardButton textToCopy={t('details')} />
      </div>
    </section>
  )
}

export default PrivatForm