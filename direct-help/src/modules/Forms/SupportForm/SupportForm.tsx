import CryptoForm from "./CryptoForm"
import EuropeForm from "./EuropeForm"
import PayForm from "./PayForm"
import PrivatForm from "./PrivatForm"
import PersonalForm from "./PersonalForm"

const SupportForm = () => {
  return (
    <section className="px-[100px] text-[#1b1a1a] border border-[#7c7c7c] rounded-3xl flex flex-col items-center gap-[46px] pb-[50px]  pt-[43px] w-full max-w-[1000px] m-auto">
      <h1 className="font-medium text-5xl">Підтримайте нашу місію</h1>
      <h3 className="text-4xl">Зробіть внесок-кожна гривня важлива</h3>
      <PayForm />
      <PrivatForm/>
      <CryptoForm />
      <EuropeForm />
      <PersonalForm />
    </section>
  )
}

export default SupportForm