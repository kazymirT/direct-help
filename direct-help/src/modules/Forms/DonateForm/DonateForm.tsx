import CryptoForm from "./CryptoForm"
import EuropeForm from "./EuropeForm"
import PayForm from "./PayForm"
import PrivatForm from "./PrivatForm"
import PersonalForm from "./PersonalForm"
import { getTranslations } from "next-intl/server"

const DonateForm = async () => {
  const t = await getTranslations('form.payment');
  return (
    <section className="px-[clamp(0rem,-2.889rem+12.327vw,5rem)] xl:px-[109px] text-[#1b1a1a] md:border md:border-[#7c7c7c] rounded-3xl flex flex-col items-start gap-[10px] sm:gap-3 md:gap-4 xl:gap-[19px] pb-6.5 sm:pb-7 md:pb-8 lg:pb-9 xl:pb-15 pt-[8px] sm:pt-4 md:pt-5 lg:pt-[30px] xl:pt-[50px] w-full max-w-[clamp(20.438rem,4.512rem+67.951vw,48rem)] xl:max-w-[1064px] m-auto">
      <h1 className="text-[clamp(1.5rem,1.236rem+1.127vw,2.25rem)]">{t('title')}</h1>
      <h3 className="text-[clamp(1rem,0.692rem+1.315vw,1.875rem)]">{t('subtitle')}</h3>
      <PayForm />
      <PrivatForm/>
      <CryptoForm />
      <EuropeForm />
      <PersonalForm />
    </section>
  )
}

export default DonateForm;
