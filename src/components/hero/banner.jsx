import { Slider } from ".";

const HeroBanner = ({ children }) => {
  return (
    <div className={"hero-main-slider"}>
      <Slider>{children}</Slider>
    </div>
  );
};

export default HeroBanner;
