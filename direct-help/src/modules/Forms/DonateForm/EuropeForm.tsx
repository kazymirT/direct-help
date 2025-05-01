import Button from "@/components/Button/Button"
import { EUROPE_DATA } from "./data"
import Cryptocurrency from "@/components/Cryptocurrency/Cryptocurrency"
import { getTranslations } from "next-intl/server";

const EuropeForm = async () => {
  const t = await getTranslations('form.payment.donate');
  return (
    <section className="w-full max-w-[738px] pt-2 flex flex-col gap-3">
      <div className="flex justify-between w-full max-w-[676px] pl-1 items-center">
      <h2 className="text-[36px] leading-[28px]">{t('title')}</h2>
      <div className="w-[219px]">
        <Button size="full-s" variant="second" text={t('button')} />
      </div>
      </div>
      <section className="flex flex-col gap-[22px]">
        {EUROPE_DATA.map(({ id, ...props }) => (
          <Cryptocurrency key={id} {...props} />
        ))}
      </section>
    </section>
  )
}

export default EuropeForm