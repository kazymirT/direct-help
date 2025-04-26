import Cryptocurrency from "@/components/Cryptocurrency/Cryptocurrency"
import { CRYPTO_DATA } from "./data"

const CryptoForm = () => {
  return (
    <section className="w-full max-w-[669px] flex flex-col gap-[50px]">
      <h2 className="text-[#1b1a1a] text-[36px] pl-[11px]">Криптовалюта</h2>
      <div className="flex flex-col gap-5">
        {CRYPTO_DATA.map(({ id, ...props }) => (
          <Cryptocurrency key={id} {...props}  />
        ))}
      </div>
    </section>
  )
}

export default CryptoForm