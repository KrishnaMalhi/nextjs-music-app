const Slide = ({ type, src, children }) => {
  return (
    <div className="slide">
      <Asset type={type} src={src} />
      {children}
    </div>
  );
};
const Asset = ({ type, src }) => {
  if (type === "image") {
    return (
      <div
        className="slide-asset"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
    );
  }
  return (
    <div className="slide-asset">
      <video src={src}></video>
    </div>
  );
};

export default Slide;
