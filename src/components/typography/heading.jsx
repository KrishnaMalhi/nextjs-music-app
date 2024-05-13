import Animate from "../animations/animate";

const Heading = ({
  children,
  className,
  as,
  heavy,
  light,
  italic,
  hasAnimation,
  animation,
  delay,
}) => {
  const Component = as || "h1";
  const weight = heavy ? "heading-heavy" : light ? "heading-light" : "";
  const style = italic ? "font-italic" : "";
  if (hasAnimation) {
    return (
      <Animate type={animation} delay={delay}>
        <Component className={`${weight} ${style} ${className}`}>
          {children}
        </Component>
      </Animate>
    );
  }
  return (
    <Component className={`${weight} ${style} ${className}`}>
      {children}
    </Component>
  );
};

export default Heading;
