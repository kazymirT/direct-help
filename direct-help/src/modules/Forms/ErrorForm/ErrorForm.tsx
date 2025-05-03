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
      <section className="w-full max-w-[1280px] m-auto pt-15 flex flex-col gap-[65px]">
        <h1 className="text-[#1b1a1a] text-[28px] font-medium">
          <p className="leading-[1.1]">{t('title')}</p>
          <p>{t('subtitle')}</p>
        </h1>
        <div className="w-full max-w-[415px] m-auto flex flex-col gap-[116px] pb-[116px]">
          <Image alt="error" src='/error.png' width={415} height={183} />
          <Button size="full-s" variant="second" text={t('button')} onClick={() => onClick('idle')} />
        </div>
      </section>
    );
}

export default ErrorForm;
