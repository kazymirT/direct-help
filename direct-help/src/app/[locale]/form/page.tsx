import CarForm from "@/modules/Forms/CarForm/CarForm";
import { setRequestLocale } from "next-intl/server";
// import SuccessForm from "@/modules/Forms/SuccessForm/SuccessForm";
type Props =  {
  params: Promise<{locale: string}>;
}
export default async function SupportForm({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <section className="flex flex-col m-auto w-full max-w-[1280px]">
        <CarForm />
        {/* <SuccessForm /> */}
    </section>
  );
}
