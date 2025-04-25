import Image from "next/image"

const SuccessForm = () => {
  return (
    <section className="flex flex-col gap-1 pt-19 pl-1 items-center">
      <h1 className="font-medium text-3xl text-[#1b1a1a] self-start">Дякуємо за звернення! Найближчим часом з вами зв’яжуться.</h1>
      <Image alt="form success send" src='/form-success.png' width={403} height={403} />
    </section>
  )
}

export default SuccessForm