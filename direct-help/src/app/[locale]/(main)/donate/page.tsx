import DonateForm from "@/modules/Forms/DonateForm/DonateForm";
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
    <section className="flex flex-col md:gap-4 lg:gap-5 xl:gap-15 m-auto wrapper pt-5 md:pt-6 md:pb-10 lg:pb-15 xl:pb-[299px]">
       <div className="text-[clamp(1.25rem,0.889rem+1.541vw,1.875rem)] lg:text-[clamp(1.25rem,0.889rem+1.541vw,1.875rem)]">
        <h2 className="w-full max-w-[1064px] m-auto lg:font-medium text-[#2e2c2c] leading-[1.215]">{t('title.one')}</h2>
        <h2 className="w-full max-w-[1064px] m-auto lg:font-medium text-[#2e2c2c] leading-[1.15]">{t('title.two')}</h2>
       </div>
       <DonateForm />
    </section>
    </div>
  );
}
