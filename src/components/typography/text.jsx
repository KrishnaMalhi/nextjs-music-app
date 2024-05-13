import Animate from "../animations/animate";

const Text = ({
  children,
  as,
  bold,
  light,
  italic,
  className,
  variant,
  hasAnimation,
  animation,
  delay,
  ...props
}) => {
  const Component = as || "p";
  const classes = [];
  if (bold) classes.push("font-bold");
  if (light) classes.push("font-light");
  if (italic) classes.push("font-italic");
  if (variant) classes.push(`text-${variant}`);
  if (className) classes.push(className);

  if (hasAnimation) {
    return (
      <Animate type={animation} delay={delay}>
        <Component
          {...(classes.length ? { className: classes.join(" ") } : {})}
          {...props}
        >
          {children}
        </Component>
      </Animate>
    );
  }

  return (
    <Component
      {...(classes.length ? { className: classes.join(" ") } : {})}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
