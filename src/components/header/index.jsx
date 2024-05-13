import { Navigation } from "@app/config/navigation";
import useMediaScreens from "@app/hooks/useMediaScreens";
import logo from "@public/images/Logo.png";
import logo2 from "@public/images/Logo2.png";
import closeIcon from "@public/images/close-icon.png";
import hamburger from "@public/images/hamburger-icon.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const { isTablet, isDesktop, isLargeScreen } = useMediaScreens();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrolled(position > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      (isDesktop ||
        isLargeScreen ||
        isTablet?.landscape ||
        isTablet?.portrait) &&
      showSideNav
    ) {
      setShowSideNav(false);
    }
  }, [isTablet, isDesktop, isLargeScreen]);

  const handleSidebar = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <header className={scrolled ? `scrolled header-top-line` : ""}>
      <div className="container-fluid">
        <Row className={`align-items-center align-items-xl-center`}>
          <Col xs={4} md={3}>
            <div className="header-logo">
              <Link href="/">
                <Image
                  src={logo2}
                  alt="sixime logo"
                  priority={true}
                  className="img-fluid"
                />
              </Link>
              <Link href="/">
                <Image
                  src={logo}
                  alt="sixime logo"
                  priority={true}
                  className="img-fluid"
                />
              </Link>
            </div>
          </Col>
          <Col xs={8} md={9}>
            <div
              className={`${
                showSideNav
                  ? "mobile-header-nav-container"
                  : "header-nav-container"
              }`}
            >
              <div className="close-button" onClick={handleSidebar}>
                <Image
                  src={closeIcon}
                  alt="closeIcon"
                  priority={true}
                  className="img-fluid"
                />
              </div>
              <ul>
                {Navigation.map((navItem, index) => (
                  <li key={index}>
                    <Link
                      href={navItem.href}
                      className={router.asPath === navItem.href ? "activeRoute" : ""}
                    >
                      <lablel>{navItem.label}</lablel>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hamburger" onClick={handleSidebar}>
              <Image
                src={hamburger}
                alt="hamburger"
                priority={true}
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
};
export default Header;
