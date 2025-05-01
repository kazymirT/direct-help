import Image from "next/image"
import ClipboardButton from "@/components/ClipboardButton/ClipboardButton"
import { getTranslations } from "next-intl/server";

const PrivatForm = async () => {
  const t = await getTranslations('form.payment.privat');
  return (
    <section className="flex flex-col pt-6 gap-2 w-full">
      <h3 className="text-[#1b1a1a] text-[36px] leading-[1.1]">{t('title')}</h3>
      <Image alt="privatBank" src='/support/privat24.svg' className="pl-0" width={365} height={78} />
      <div className="flex justify-between items-center w-full max-w-[738px] pt-5">
      <div className="text-[#262222] font-light text-xl leading-[1.15]">
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