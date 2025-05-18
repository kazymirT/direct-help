'use client';
import { REPORTING_DATA, videos } from './data';
import ReportingCard from '@/components/ReportingCard/ReportingCard';
import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import ReportingModal from '../ReportingModal/ReportingModal';

const ReportingList = () => {
  const [videoId, setVideoId] = useState<null | keyof typeof videos>(null);
  const t = useTranslations('reporting');
  const locale = useLocale();

  const handleCloseModal = () => setVideoId(null);
  const handleOpenModal = (videoId: keyof typeof videos) => setVideoId(videoId);

  const isUK = locale === 'uk';

  const descriptionCN = clsx(
    'text-[clamp(1rem,0.567rem+1.849vw,1.75rem)] lg:text-[clamp(1.75rem,0.519rem+1.923vw,2.25rem)] text-[#2f2d2d] w-full leading-[1.2]',
    {
      ['max-w-[328px] xs:max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[680px] xl:max-w-[852px]']:
        isUK,
      ['max-w-[328px] xs:max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[680px] xl:max-w-[852px] max-w-[1063px]']:
        !isUK,
    }
  );
  return (
    <section className="wrapper xs:gap-[10px] flex flex-col gap-2 sm:gap-3 md:gap-[15px] lg:gap-17">
      <h2 className={descriptionCN}>{t('description')}</h2>
      <div className="reporting-section">
        {REPORTING_DATA.map(({ id, image, name, video }) => (
          <ReportingCard
            key={id}
            onClick={handleOpenModal}
            image={image}
            video={video}
            name={t(`list.${name}.title`)}
            button={t('button')}
          />
        ))}
      </div>
      {videoId && (
        <ReportingModal onClose={handleCloseModal} videoId={videoId} />
      )}
    </section>
  );
};

export default ReportingList;
