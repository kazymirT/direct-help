import Button from "@/components/Button/Button";
import { getTranslations } from "next-intl/server";

const BannerAction = async () => {
  const t = await getTranslations('home.banner');
  return (
    <div className="min-md:hidden w-full max-w-[327px] xs:max-w-[400px] sm:max-w-[600px] m-auto flex flex-col sm:flex-row gap-4.5 py-10">
      <Button size="full" variant="basic" text={t('buttons.support')} link="/donate" />
      <Button size="full" variant="second" text={t('buttons.request')} link="/support" />
    </div>
  )
}

export default BannerAction;
