import closeIcon from "@public/images/close-icon.png";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Heading from "../typography/heading";

const CustomModal = ({
  children,
  size = "lg",
  title,
  subTitle,
  component,
  contentClassName,
  clickArea,
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div onClick={() => setShow(!show)} className={`${clickArea} click-area`}>
        {children}
      </div>
      <Modal
        centered
        show={show}
        size={size}
        contentClassName={contentClassName}
        onHide={() => setShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="align-items-start">
          <Modal.Title id="contained-modal-title-vcenter">
            {title && (
              <Heading as="h3" heavy>
                {title}
              </Heading>
            )}
          </Modal.Title>
          <div
            className="d-block"
            style={{ cursor: "pointer" }}
            onClick={() => setShow(false)}
          >
            <Image
              src={closeIcon}
              alt="close icon"
              priority={true}
              className="img-fluid"
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          {subTitle && <Text className="d-block">{subTitle}</Text>}
          {component}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomModal;
