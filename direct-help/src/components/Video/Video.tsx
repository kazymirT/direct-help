import clsx from "clsx";

const Video = () => {
  
  const videoCN = clsx(`rounded-full absolute aspect-[1] 
    w-[clamp(8.813rem,-1.083rem+42.219vw,25.938rem)] top-0 
    right-6
    min-[375px]:right-[clamp(1.375rem,-0.857rem+9.524vw,2rem)]
    xs:top-[clamp(0.125rem,-1.75rem+6.25vw,0.75rem)] xs:right-[clamp(2rem,-0.813rem+9.375vw,2.938rem)]
    sm:top-[clamp(0.25rem,-2.25rem+6.25vw,0.75rem)] sm:right-[clamp(2.25rem,0.375rem+4.688vw,2.625rem)]
    md:top-[clamp(0rem,-3rem+6.25vw,1rem)] md:right-[clamp(2.625rem,0.375rem+4.688vw,3.375rem)]
    lg:w-[clamp(25.938rem,0.091rem+40.385vw,36.438rem)] lg:right-[clamp(2.875rem,0.721rem+3.365vw,3.75rem)] lg:-top-[7px]
    xl:-top-5
    2xl:w-[clamp(36.375rem,14.25rem+24.583vw,43.75rem)]! 2xl:-top-[clamp(0.75rem,10.568rem+-10.909vw,0rem)]! 2xl:right-15!
    min-[1500px]:top-0! min-[1500px]:right-10!
    min-[1600px]:top-2! min-[1600px]:right-0!
    min-[1700px]:top-5! min-[1700px]:-right-5!
    min-[1800px]:top-8! min-[1800px]:-right-15!
    min-[1920px]:top-14! min-[1920px]:-right-20!
    `);
  return (
    <video
      muted
      autoPlay
      loop
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
