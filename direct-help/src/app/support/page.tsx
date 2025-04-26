import SupportForm from "@/modules/Forms/SupportForm/SupportForm";

export default function Support() {
  return (
    <div className="w-full flex justify-center bg-[#fdf9f0]">
    <section className="flex flex-col gap-24 m-auto w-full max-w-[1280px] pt-10 pb-[156px]">
        <h2 className="w-full max-w-[1174px] m-auto font-medium text-[40px] text-[#2e2c2c] leading-[1.215]">Допоможіть відремонтувати та доставити авто для ЗСУ.
        Кожна гривня наближає перемогу. Ми збираємо кошти на ремонт автомобілів для підрозділів, що виконує бойові завдання на передовій. Ваш внесок — це рух наших захисників до безпеки та успіху.</h2>
        <SupportForm />
    </section>
    </div>
  );
}
