import Button from "@/components/Button/Button";
import Image from "next/image";
import { FC } from "react";
import { Status } from "../FormActions/FormActions";
import { useTranslations } from "next-intl";

export interface ErrorFormProps {
  onClick: (status: Status) => void;
}

const ErrorForm: FC<ErrorFormProps> = ({ onClick }) => {
  const t = useTranslations('form.error')
  return (
    <section className="wrapper m-auto pt-8 lg:pt-15 flex flex-col gap-6 lg:gap-[65px] pb-[116px]">
      <h1 className="text-[#1b1a1a] max-md:leading-[1.15] text-[clamp(1.5rem,1.412rem+0.376vw,1.75rem)]">
        <p className="leading-[1.1]">{t('title')}</p>
        <p>{t('subtitle')}</p>
      </h1>
      <div className="w-full max-w-[320px] lg:max-w-[380px] xl:max-w-[415px] m-auto flex items-center flex-col gap-10 lg:gap-[59px]">
        <Image alt="error" src='/error.png' width={154} height={68} className="w-[clamp(9.625rem,3.881rem+24.507vw,25.938rem)] aspect-[2.26]" />
        <Button size="full-s" variant="second" text={t('button')} onClick={() => onClick('idle')} />
      </div>
    </section>
  );
}

export default ErrorForm;
