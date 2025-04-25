import Button from "@/components/Button/Button";
import { PARTNERS_DATA } from "./data";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="flex flex-col gap-[65px]">
      <section className="mt-[72px] pb-[85px] px-20 bg-gradient-partners flex flex-col gap-[49px]">
        <h2 className="font-family text-[40px] leading-[47px] text-text2">Наші партнери</h2>
        <div className="flex gap-[93px] justify-around">
          {PARTNERS_DATA && PARTNERS_DATA.map(({ alt, id, img }) => (
            <Image alt={alt} src={img} key={id} width={250} height={200} />
          ))}
        </div>
      </section>
      <div className="w-[420px] self-end mr-20">
        <Button size="full" variant="second" text="Стати партнером" link="/new-partner" />
      </div>
    </div>
  )
}

export default Partners;
