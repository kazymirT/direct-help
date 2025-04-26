import Button from "@/components/Button/Button"
import { EUROPE_DATA } from "./data"
import Cryptocurrency from "@/components/Cryptocurrency/Cryptocurrency"

const EuropeForm = () => {
  return (
    <section className="w-full max-w-[669px] flex flex-col gap-3">
      <div className="flex justify-between items-center pl-[10px]">
      <h2 className="text-[36px] leading-[28px]">Donate from Europe USA</h2>
      <div className="w-[219px]">
        <Button size="full-s" variant="second" text="Donate" />
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