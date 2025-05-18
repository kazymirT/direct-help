import Button from '@/components/Button/Button';
import { getTranslations } from 'next-intl/server';

const BannerAction = async () => {
  const t = await getTranslations('home.banner');
  return (
    <div className="xs:max-w-[400px] m-auto flex w-full max-w-[327px] flex-col gap-3.5 pt-9 pb-6 sm:max-w-[600px] sm:flex-row min-md:hidden">
      <Button
        size="full"
        variant="basic"
        text={t('buttons.support')}
        link="/donate"
      />
      <Button
        size="full"
        variant="second"
        text={t('buttons.request')}
        link="/support"
      />
    </div>
  );
};

export default BannerAction;
