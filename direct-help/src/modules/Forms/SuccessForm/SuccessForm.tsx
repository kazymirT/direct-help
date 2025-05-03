import { useTranslations } from "next-intl";
import Image from "next/image"

const SuccessForm = () => {
    const t = useTranslations('form.success');
  return (
    <section className="flex flex-col gap-1 pt-19 pb-19 pl-1 items-center">
      <h1 className="font-medium text-[28px] text-[#2f2d2d] self-start">{t('title')}</h1>
      <Image alt="form success send" src='/form-success.png' width={403} height={403} />
    </section>
  )
}

export default SuccessForm