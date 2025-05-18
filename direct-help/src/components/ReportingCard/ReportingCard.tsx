import { type FC } from 'react';
import Image from 'next/image';

import Button from '../Button/Button';
import { videos } from '@/modules/Reporting/ReportingList/data';

export type ReportingCardProps = {
  image: string;
  name: string;
  video: keyof typeof videos;
  button: string;
  onClick: (videoId: keyof typeof videos) => void;
};

const ReportingCard: FC<ReportingCardProps> = ({
  image,
  name,
  onClick,
  video,
  button,
}) => {
  const handleClick = () => onClick(video);

  return (
    <section
      onClick={handleClick}
      className="group xs:gap-3 xs:px-3 xs:pb-3 shadow-reporting-card pointer-events-auto flex w-full max-w-[410px] min-w-[156px] flex-col justify-between gap-2 rounded-md border-2 border-[#bfc1c2] px-2 pt-[6px] pb-2 sm:gap-4 sm:px-4 sm:pb-4 md:pointer-events-none md:gap-5 md:px-5 md:pt-2 md:pb-5 lg:gap-[22px] lg:px-[21px] lg:pt-[10px] lg:pb-6"
    >
      <Image
        alt="alt"
        src={image}
        width={136}
        height={170}
        className="aspect-[0.79] w-full object-cover"
      />
      <h3 className="w-full max-w-[368px] text-[clamp(0.625rem,0.408rem+0.924vw,1rem)] leading-[1.2] text-[#1b1a1a] lg:text-[clamp(1rem,-0.231rem+1.923vw,1.5rem)]">
        {name}
      </h3>
      <div className="pointer-events-auto max-md:hidden">
        <Button
          size="full-s"
          variant="second"
          text={button}
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        />
      </div>
    </section>
  );
};

export default ReportingCard;
