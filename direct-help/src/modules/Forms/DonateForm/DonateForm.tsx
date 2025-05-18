import CryptoForm from './CryptoForm';
import EuropeForm from './EuropeForm';
import PayForm from './PayForm';
import PrivatForm from './PrivatForm';
import { getTranslations } from 'next-intl/server';

const DonateForm = async () => {
  const t = await getTranslations('form.payment');
  return (
    <section className="m-auto flex w-full max-w-[clamp(20.438rem,4.512rem+67.951vw,48rem)] flex-col items-start gap-[10px] rounded-3xl px-[clamp(0rem,-2.889rem+12.327vw,5rem)] pt-[8px] pb-6.5 text-[#1b1a1a] sm:gap-3 sm:pt-4 sm:pb-7 md:gap-4 md:border md:border-[#7c7c7c] md:pt-5 md:pb-8 lg:pt-[30px] lg:pb-9 xl:max-w-[1064px] xl:gap-[19px] xl:px-[109px] xl:pt-[50px] xl:pb-15">
      <h1 className="text-[clamp(1.5rem,1.236rem+1.127vw,2.25rem)]">
        {t('title')}
      </h1>
      <h3 className="text-[clamp(1rem,0.692rem+1.315vw,1.875rem)]">
        {t('subtitle')}
      </h3>
      <PayForm />
      <PrivatForm />
      <CryptoForm />
      <EuropeForm />
    </section>
  );
};

export default DonateForm;
