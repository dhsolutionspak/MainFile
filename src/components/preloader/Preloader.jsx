import { useEffect, useRef } from "react";

const Preloader = () => {
  const preloaderSection = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        const preloader = preloaderSection.current;
        if (preloader) {
          preloader.style.display = "none";
        }
      }, 500);
    }
  }, []);

  return (
    <div className="preloader" ref={preloaderSection}>
      <div className="circle-loader"></div>
    </div>
  );
};

export default Preloader;
