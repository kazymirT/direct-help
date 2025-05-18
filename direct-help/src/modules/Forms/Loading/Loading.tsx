const Loading = () => {
  return (
    <div className="absolute top-0 left-0 z-20 h-full w-full bg-[rgb(255,255,255,.5)]">
      <div className="loader absolute top-[97px] left-1/2 w-10 -translate-x-1/2 border-4 border-[#2f2d2d] md:w-20 md:border-8 lg:w-30 lg:border-16"></div>
    </div>
  );
};

export default Loading;
