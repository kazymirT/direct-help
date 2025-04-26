import Image from "next/image"
import ClipboardButton from "@/components/ClipboardButton/ClipboardButton"

const PrivatForm = () => {
  return (
    <section className="self-start flex flex-col gap-[18px] w-full max-w-[669px] m-auto">
      <h3 className="text-[#1b1a1a] text-[36px] pl-3 leading-[1.1]">Зробити внесок можна</h3>
      <Image alt="privatBank" src='/support/privat24.svg' className="pl-4" width={365} height={78} />
      <div className="flex gap-7 items-center w-full max-w-[590px] pt-1">
      <div className="text-[#262222] font-light text-xl leading-[1.15]">
        <p>Найменування отримувача: БО БФ ПРЯМА ДОПОМОГА</p>
        <p>Код отримувача: 44748259</p>
        <p>Рахунок отримувача: UA143052990000026008035903939</p>
        <p>Назва банку: АТ КБ ПРИВАТБАНК</p>
        <p>Призначення: пожертва згідно потреб проекту Trucks4U</p>
      </div>
      <ClipboardButton textToCopy={`Найменування отримувача: БО БФ ПРЯМА ДОПОМОГА Код отримувача: 44748259 Рахунок отримувача: UA143052990000026008035903939 Назва банку: АТ КБ "ПРИВАТБАНК" Призначення: пожертва згідно потреб проекту Trucks4U`} />
      </div>
    </section>
  )
}

export default PrivatForm