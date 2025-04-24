import CarForm from "@/modules/Forms/CarForm/CarForm";

export default function Form() {
  return (
    <section className="flex pt-15 gap-[60px] flex-col m-auto w-full max-w-[1280px]">
        <h1 className="font-medium text-[40px] leading-[47px] text-[#1b1a1a]">Запит на доставку автомобіля</h1>
        <CarForm />
    </section>
  );
}
