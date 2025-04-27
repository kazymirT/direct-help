import Button from "@/components/Button/Button";
import Header from "../Header/Header";

const Banner = () => {
    return (
      <div className="banner">
        <Header />
        <div className="flex flex-col gap-[179px] w-full max-w-[1280px] m-auto">
        <section className="font-third flex flex-col gap-[82px]">
        <h1 className="text-black-20 font-third flex flex-col gap-11">
          <p className="text-[96px] leading-[1] font-normal">Пікапи для ЗСУ –</p>
          <p className="text-[54px] leading-[1] font-normal">допоможи закрити потребу!</p>
        </h1>
        <p className="font-normal text-4xl text-text2 max-w-[620px] leading-[1.5]">Разом ми забезпечимо захисників надійним транспортом</p>
        </section>
        <div className="w-full max-w-[848px] flex gap-[18px]">
          <Button size="full" variant="basic" text="Підтримати" link="/support" />
          <Button size="full" variant="second" text="Запит на допомогу" link="/form" />
        </div>
        </div>
      </div>
    )
}

export default Banner;
