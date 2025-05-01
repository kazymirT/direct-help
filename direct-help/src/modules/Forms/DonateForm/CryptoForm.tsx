import Cryptocurrency from "@/components/Cryptocurrency/Cryptocurrency"
import { CRYPTO_DATA } from "./data"
import { getTranslations } from "next-intl/server";

const CryptoForm = async () => {
  const t = await getTranslations('form.payment.cryptocurrency');
  return (
    <section className="w-full max-w-[738px] flex flex-col gap-[40px]">
      <h2 className="text-[#1b1a1a] text-[36px] pt-9">{t('title')}</h2>
      <div className="flex flex-col gap-[22px]">
        {CRYPTO_DATA.map(({ id, ...props }) => (
          <Cryptocurrency key={id} {...props}  />
        ))}
      </div>
    </section>
  )
}

export default CryptoForm