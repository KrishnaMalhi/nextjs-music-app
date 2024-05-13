const { default: Animate } = require("../animations/animate");

const Dots = ({ slidesCount, currentSlide, gotoSlide }) => {

  const dots = [];
  for (let i = 0; i < slidesCount; i++) {
    dots.push(
      <li key={i} className={`dot ${currentSlide === i ? "active" : ""} `}>
        <span onClick={() => gotoSlide(i)}></span>
      </li>
    );
  }

  return (
    <Animate type="fadeInUp" delay={2000}>
      <div className="slider-dots-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="slider-dots">{dots}</ul>
            </div>
          </div>
        </div>
      </div>
    </Animate>
  );
};

export default Dots;
