import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly reset the scroll position to the top-left corner
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // Ensures no scrolling animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
