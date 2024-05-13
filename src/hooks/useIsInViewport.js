import { useEffect, useState } from "react";

const useIsInViewport = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current);

    return () => {
      if (observer) observer.disconnect();
    };
  }, [ref]);
  return isIntersecting;
};

export default useIsInViewport;
