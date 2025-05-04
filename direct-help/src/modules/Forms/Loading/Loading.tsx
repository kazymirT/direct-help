const Loading = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[rgb(255,255,255,.5)] z-20">
      <div className="loader w-10 md:w-20 lg:w-30 border-4 md:border-8 lg:border-16 border-[#2f2d2d] absolute left-1/2 -translate-x-1/2 top-[97px]"></div>
    </div>
  )
}

export default Loading