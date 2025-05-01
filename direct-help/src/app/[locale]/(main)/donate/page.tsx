import SupportForm from "@/modules/Forms/DonateForm/DonateForm";
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
    <section className="flex flex-col gap-15 m-auto w-full max-w-[1280px] pt-6 pb-[299px]">
       <div>
        <h2 className="w-full max-w-[1064px] m-auto font-medium text-[30px] text-[#2e2c2c] leading-[1.215]">{t('title.one')}</h2>
        <h2 className="w-full max-w-[1064px] m-auto font-medium text-[30px] text-[#2e2c2c] leading-[1.15]">{t('title.two')}</h2>
       </div>
        <SupportForm />
    </section>
    </div>
  );
}
