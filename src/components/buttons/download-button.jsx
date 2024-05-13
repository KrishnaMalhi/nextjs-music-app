import rightArrow from "@public/images/right-arrow.png";
import Image from "next/image";

const DownloadButton = () => {
  return (
    <button className="download-btn">
      <span>Download</span>
      <span className="arrow">
        <Image
          src={rightArrow}
          alt="right arrow"
          priority={true}
          className="img-fluid"
        />
      </span>
    </button>
  );
};

export default DownloadButton;
