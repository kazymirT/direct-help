import Button from "@/components/Button/Button";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props =  {
  params: Promise<{locale: string}>;
}

export default async function Error({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('form.error')
    return (
      <section className="w-full max-w-[1280px] m-auto pt-15 flex flex-col gap-[65px]">
        <h1 className="text-[#1b1a1a] text-3xl font-medium">
          <p className="leading-[1.1]">{t('title')}</p>
          <p>{t('subtitle')}</p>
        </h1>
        <div className="w-full max-w-[415px] m-auto flex flex-col gap-[116px] pb-[116px]">
          <Image alt="error" src='/error.png' width={415} height={183} />
          <Button size="full-s" variant="second" text={t('button')} link="/form" />
        </div>
      </section>
    );
  }
  