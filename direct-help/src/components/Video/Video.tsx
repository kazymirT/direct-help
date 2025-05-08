'use client'
import { useEffect, useRef } from "react";
import clsx from "clsx";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
        console.log("Video is playing");
      } catch (err) {
        console.warn("Autoplay failed:", err);
      }
    };

    playVideo();
  });

  const videoCN = clsx(`rounded-full absolute aspect-[1] 
    w-[clamp(8.813rem,-1.083rem+42.219vw,25.938rem)] top-0 
    right-6
    min-[375px]:right-[clamp(1.375rem,-0.857rem+9.524vw,2rem)]
    xs:top-[clamp(0.125rem,-1.75rem+6.25vw,0.75rem)] xs:right-[clamp(2rem,-0.813rem+9.375vw,2.938rem)]
    sm:top-1 sm:right-[42px]
    md:top-0 md:right-[50px]
    lg:w-[clamp(25.938rem,0.091rem+40.385vw,36.438rem)] lg:right-[clamp(2.875rem,0.721rem+3.365vw,3.75rem)] lg:-top-8 xl:-top-3.5
     `);

  return (
    <video
      ref={videoRef}
      playsInline
      controls={false}
      className={videoCN}
    >
      <source src="/logo_1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
