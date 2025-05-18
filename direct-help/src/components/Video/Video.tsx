const Video = () => {
  return (
    <video muted autoPlay loop playsInline controls={false} className="video">
      <source src="/logo_1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
