import { Banner, Content, Slide } from "@app/components/hero";
import Heading from "@app/components/typography/heading";
import sliderone from "@public/images/banner/banner1.png";
import soundLogo from "@public/images/sound-logo.png";
import Image from "next/image";
import { Col } from "react-bootstrap";

const HomeHeroSlider = () => {
  return (
    <section className="banner-section">
      <Banner>
        <Slide src={sliderone.src} type={"image"}>
          <Content>
            <Col>
              <div className="sliderData">
                <div className="contentPlacement">
                  <Heading
                    className="slider-sub-heading"
                    heavy
                    hasAnimation
                    animation="fadeInUp"
                    delay={1000}
                    as={"h2"}
                  >
                    Turing Royalty Rights Into Reparation Rights
                  </Heading>
                  <Image
                    src={soundLogo}
                    alt="sound logo"
                    priority={true}
                  />
                </div>
              </div>
            </Col>
          </Content>
        </Slide>
        <Slide src={sliderone.src} type={"image"}>
          <Content>
            <Col>
              <div className="sliderData">
                <div className="contentPlacement">
                  <Heading
                    className="slider-sub-heading"
                    heavy
                    hasAnimation
                    animation="fadeInUp"
                    delay={1000}
                    as={"h2"}
                  >
                    Turing Royalty Rights Into Reparation Rights
                  </Heading>
                  <Image
                    src={soundLogo}
                    alt="sound logo"
                    priority={true}
                  />
                </div>
              </div>
            </Col>
          </Content>
        </Slide>
      </Banner>
    </section>
  );
};
export default HomeHeroSlider;
