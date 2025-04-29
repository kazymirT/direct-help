import Button from "@/components/Button/Button"
import clsx from "clsx";
import { getLocale, getTranslations } from "next-intl/server";

const Donate = async () => {
  const t = await getTranslations('home.donate');
  const locale = await getLocale();

  const isEN = locale === 'en';
  const isUK = locale === 'uk';
  const isDE = locale === 'de';

  const buttonCN = clsx('z-20 w-full max-w-[413px] pb-4', {
    ['max-w-[413px]']: isEN || isUK,
    ['max-w-[513px]']: isDE,
    }
  );

  return (
    <section className="relative pt-[198px] pb-[152px] flex items-center flex-col gap-19">
      <div className="relative flex w-full max-w-[1310px] justify-between items-end">
      <div className="z-20 relative w-full max-w-[799px] pl-16 font-family font-normal text-4xl text-text2">
        <h3>{t('title')}</h3>
        <p className="leading-[1.2]">{t('description-one')}</p>
        <p className="leading-[1.15]">{t('description-two')}</p>
        <p>{t('description-three')}</p>
        <div className="absolute bottom-[15px] -left-40 h-1 w-[324px] rotate-90 bg-text2"></div>
        <div className="absolute -bottom-[95px] -left-13 h-1 w-[340px] bg-text2"></div>
      </div>
      <div className="z-10 absolute top-0 right-0 bg-[#b4a35f] w-[496px] h-[506px] rounded-full blur-[125px]"></div>
      </div>
      <div className="z-10 absolute top-0 left-0 bg-[#3d69d84d] w-[677px] h-[703px] rounded-full blur-[125px]"></div>
      <div className="w-full max-w-[1280px] flex justify-end">
      <div className={buttonCN}>
        <Button size="full" variant="second" text={t('button')} />
      </div>
      </div>
    </section>
  )
}

export default Donate