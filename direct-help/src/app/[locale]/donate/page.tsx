import SupportForm from "@/modules/Forms/DonateForm/SupportForm";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props =  {
  params: Promise<{locale: string}>;
}
export default async function Donate({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('payment')
  return (
    <div className="w-full flex justify-center bg-[#fdf9f0]">
    <section className="flex flex-col gap-24 m-auto w-full max-w-[1280px] pt-10 pb-[156px]">
        <h2 className="w-full max-w-[1174px] m-auto font-medium text-[40px] text-[#2e2c2c] leading-[1.215]">{t('title')}</h2>
        <SupportForm />
    </section>
    </div>
  );
}
