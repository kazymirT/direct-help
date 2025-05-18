import Cryptocurrency from '@/components/Cryptocurrency/Cryptocurrency';
import { CRYPTO_DATA } from './data';
import { getTranslations } from 'next-intl/server';

const CryptoForm = async () => {
  const t = await getTranslations('form.payment.cryptocurrency');
  return (
    <section className="flex w-full max-w-[clamp(34.25rem,5.019rem+45.673vw,46.125rem)] flex-col gap-1 max-md:pt-3 sm:gap-3 lg:gap-9 xl:gap-10">
      <h2 className="text-[clamp(1.5rem,1.319rem+0.77vw,1.813rem)] text-[#1b1a1a] lg:pt-[9px] lg:text-[clamp(1.813rem,0.736rem+1.683vw,2.25rem)] xl:pt-9">
        {t('title')}
      </h2>
      <div className="flex flex-col gap-2.5 lg:gap-[17px] xl:gap-[22px]">
        {CRYPTO_DATA.map(({ id, ...props }) => (
          <Cryptocurrency key={id} {...props} />
        ))}
      </div>
    </section>
  );
};

export default CryptoForm;
