import Button from "@/components/Button/Button"

const Donate = () => {
  return (
    <section className="relative pt-[198px] pb-[314px] flex justify-center">
      <div className="relative flex w-full max-w-[1310px] justify-between items-end">
      <div className="z-20 relative w-full max-w-[799px] pl-16 font-family font-normal text-4xl text-text2">
        <h3>Допоможи наблизити перемогу</h3>
        <p className="leading-[1.2]">Пальне та запчастини — те, без чого не поїде жоден пікап.</p>
        <p className="leading-[1.15]">Зроби свій внесок у надійність техніки для захисників.</p>
        <p>Кожен донат — це кілометри до перемоги.</p>
        <div className="absolute bottom-[15px] -left-40 h-1 w-[324px] rotate-90 bg-text2"></div>
        <div className="absolute -bottom-[95px] -left-13 h-1 w-[340px] bg-text2"></div>
      </div>
      <div className="z-20 w-full max-w-[466px] pb-4">
        <Button size="full" variant="second" text="Задонатити на паливо" />
      </div>
      <div className="z-10 absolute top-0 right-0 bg-[#b4a35f] w-[496px] h-[506px] rounded-full blur-[125px]"></div>
      </div>
      <div className="z-10 absolute top-0 left-0 bg-[#3d69d84d] w-[677px] h-[703px] rounded-full blur-[125px]"></div>
    </section>
  )
}

export default Donate