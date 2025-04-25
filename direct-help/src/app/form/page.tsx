import CarForm from "@/modules/Forms/CarForm/CarForm";
// import SuccessForm from "@/modules/Forms/SuccessForm/SuccessForm";

export default function Form() {
  return (
    <section className="flex flex-col m-auto w-full max-w-[1280px]">
        <CarForm />
        {/* <SuccessForm /> */}
    </section>
  );
}
