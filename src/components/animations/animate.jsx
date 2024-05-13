import useIsInViewport from "@app/hooks/useIsInViewport";
import React, { Children, useEffect, useRef, useState } from "react";

const Animate = ({ children, type, delay }) => {
  const eleRef = useRef(null);
  const inView = useIsInViewport(eleRef);
  const [className, setClassName] = useState("animate");

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        return setClassName(`animate animate__animated animate__${type}`);
      }, delay);
    }
  }, [inView]);
  const mutated = Children.map(children, (child) => {
    return React.cloneElement(child, {
      className: `${className} ${
        child.props.className ? child.props.className : ""
      }`,
      ref: eleRef,
    });
  });

  return <>{mutated}</>;
};

export default Animate;
