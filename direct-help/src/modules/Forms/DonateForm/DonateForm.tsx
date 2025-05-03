import CryptoForm from "./CryptoForm"
import EuropeForm from "./EuropeForm"
import PayForm from "./PayForm"
import PrivatForm from "./PrivatForm"
import PersonalForm from "./PersonalForm"
import { getTranslations } from "next-intl/server"

const DonateForm = async () => {
  const t = await getTranslations('form.payment');
  return (
    <section className="px-[109px] text-[#1b1a1a] border border-[#7c7c7c] rounded-3xl flex flex-col items-start gap-[19px] pb-[60px] pt-[50px] w-full max-w-[1064px] m-auto">
      <h1 className="text-[36px]">{t('title')}</h1>
      <h3 className="text-3xl">{t('subtitle')}</h3>
      <PayForm />
      <PrivatForm/>
      <CryptoForm />
      <EuropeForm />
      <PersonalForm />
    </section>
  )
}

export default DonateForm;
