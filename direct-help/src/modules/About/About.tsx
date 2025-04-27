import Button from "@/components/Button/Button"
import Image from "next/image"

const About = () => {
  return (
    <div className="w-full pt-[90px] pb-[94px] flex justify-center">
      <div className="w-full max-w-[1280px] flex flex-col items-end gap-[140px]">
        <section className="w-full flex flex-col gap-4">
        <h2 className="font-medium tracking-wide text-[40px] text-text2">Про  проєкт</h2>
        <div className="flex w-full justify-between">
        <div className="w-full max-w-[522px] text-3xl text-text2">
          <p>Тrucks4u — це волонтерський проєкт, що працює для тих, хто нас захищає. Ми безкоштовно доставляємо пікапи та інші автомобілі для ЗСУ — туди, де вони найбільше потрібні.
          </p>
          <p className="leading-[1.15]">Ми шукаємо надійні авто, перевіряємо їхній технічний стан, оформлюємо документи і особисто доправляємо прямо до бойових підрозділів. Наша мета — дати українським захисникам колеса, на які вони можуть покластися.
          </p>
          <p>Це можливо лише завдяки людям, які не стоять осторонь. Уся допомога — прозора, кожна гривня спрямована на конкретну машину для конкретного підрозділу. Разом ми наближаємо перемогу.</p>
        </div>
        <div className="relative pt-[96px] h-fit">
        <Image alt="" src='/about.png' width={666} height={507} className="relative z-20 h-[507px]"  />
          <div className="absolute top-[47px] -left-[58px] bg-[#0d1415] w-[237px] h-[227px] z-10"></div>
          <div className="absolute top-1 right-0 bg-[#f8b428] w-[322px] h-[297px]"></div>
          <div className="absolute -bottom-[92px] right-0 bg-[#0d1415] w-[363px] h-[95px]"></div>
          <Image alt="" src="/icons/about.svg" width={323} height={263} className="absolute -bottom-11 -left-12 z-20" />
        </div>
        </div>
        </section>
        <div className="w-full max-w-[1290px] self-center flex justify-end">
          <div className="w-full max-w-[416px]">
          <Button size="full" variant="second" text="Детальніше" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About