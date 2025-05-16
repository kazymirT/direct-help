import { type FC } from "react";
import Image from "next/image";

import Button from "../Button/Button";
import { videos } from "@/modules/Reporting/ReportingList/data";

export type ReportingCardProps = {
  image: string;
  name: string;
  video: keyof typeof videos;
  button: string;
  onClick: (videoId: keyof typeof videos) => void;
};

const ReportingCard: FC<ReportingCardProps> = ({ image, name, onClick, video, button }) => {
  const handleClick = () => onClick(video);

  return (
    <section
      onClick={handleClick}
      className="group 
        pointer-events-auto md:pointer-events-none 
        flex flex-col justify-between gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-[22px] 
        border-2 border-[#bfc1c2] rounded-md 
        px-2 xs:px-3 sm:px-4 md:px-5 lg:px-[21px] 
        pt-[6px] md:pt-2 lg:pt-[10px] pb-2 xs:pb-3 sm:pb-4 md:pb-5 lg:pb-6 
        shadow-reporting-card 
        w-full min-w-[156px] max-w-[410px]"
    >
      <Image
        alt="alt"
        src={image}
        width={136}
        height={170}
        className="w-full object-cover aspect-[0.79]"
      />
      <h3 className="text-[#1b1a1a] text-[clamp(0.625rem,0.408rem+0.924vw,1rem)] lg:text-[clamp(1rem,-0.231rem+1.923vw,1.5rem)] w-full max-w-[368px] leading-[1.2]">
        {name}
      </h3>
      <div className="max-md:hidden pointer-events-auto">
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
