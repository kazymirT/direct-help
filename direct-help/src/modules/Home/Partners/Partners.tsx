import Button from '@/components/Button/Button';
import Slider from '../../Sliders/SliderPartners/Slider';
import { PARTNERS_DATA } from './data';
import { EmblaOptionsType } from 'embla-carousel';
import { getTranslations } from 'next-intl/server';
const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: 'start',
  duration: 500,
  skipSnaps: true,
};

const Partners = async () => {
  const t = await getTranslations('home.partners');
  return (
    <div className="m-auto flex w-full max-w-[1920px] flex-col items-end gap-5 lg:mt-[72px] lg:gap-10 xl:gap-[65px]">
      <div className="bg-gradient-partners xs:pb-7 flex w-full flex-col items-end pb-5 sm:pb-9 md:pb-[92px]">
        <section className="wrapper m-auto pb-2 sm:pt-4 md:pt-5 lg:pt-0 lg:pb-[30px]">
          <h2 className="font-family text-text2 text-[clamp(1.563rem,1.32rem+1.033vw,2.25rem)] leading-[2] lg:leading-[1.3]">
            {t('title')}
          </h2>
        </section>
        <div className="w-full">
          <Slider slides={PARTNERS_DATA} options={OPTIONS} />
        </div>
      </div>
      <div className="wrapper m-auto flex justify-end">
        <div className="min-xs:max-w-[241px] w-full max-w-[330px] lg:max-w-[341px] xl:max-w-[416px]">
          <Button
            size="full"
            variant="second"
            text={t('button')}
            link="/new-partner"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
