import Button from "@/components/Button/Button";
import Image from "next/image";

export default function Error() {
    return (
      <section className="w-full max-w-[1280px] m-auto pt-15 flex flex-col gap-[65px]">
        <h1 className="text-[#1b1a1a] text-3xl font-medium">
          <p className="leading-[1.1]">Ой… щось пішло не так.</p>
          <p>Але ми віримо: навіть маленький крок назад — це шлях до великої справи.</p>
        </h1>
        <div className="w-full max-w-[415px] m-auto flex flex-col gap-[116px] pb-[116px]">
          <Image alt="error" src='/error.png' width={415} height={183} />
          <Button size="full-s" variant="second" text="Повернутись назад" link="/form" />
        </div>
      </section>
    );
  }
  