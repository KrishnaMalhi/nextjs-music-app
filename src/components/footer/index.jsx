import soundLogo2 from "@public/images/sound-logo2.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <Image
          src={soundLogo2}
          alt="sound logo"
          priority={true}
          className="img-fluid"
        />
        <p>
          <strong>©</strong> 2023 All Rights Reserved. <br />
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
