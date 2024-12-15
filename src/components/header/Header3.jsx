import { useEffect, useRef, useState } from "react";
import Canvas from "../canvas/Canvas";
import Link from "next/link";
import LogoWhite from "../../../public/assets/imgs/logo/site-logo-white.png";
import MenuWhite from "../../../public/assets/imgs/icon/menu-white.png";
import MobileLogo from "../../../public/assets/imgs/logo/footer-logo-white.png";
import Image from "next/image";
import { ImWhatsapp } from "react-icons/im";

export default function Header3() {
  const [topScroll, setTopScroll] = useState(0);

  const ofCanvasArea = useRef();
  const headerArea = useRef();

  const handleTopScroll = () => {
    const position = window.pageYOffset;
    setTopScroll(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleTopScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, []);
  if (typeof window !== "undefined") {
    let device_width = window.innerWidth;
    if (device_width < 1365) {
      let header_bg = headerArea.current;
      if (header_bg) {
        if (topScroll > 20) {
          header_bg.style.background = "#121212";
          header_bg.style.setProperty("mix-blend-mode", "unset");
        } else {
          header_bg.style.background = "transparent";
          header_bg.style.setProperty("mix-blend-mode", "exclusion");
        }
      }
    }
  }
  const openCanvas = () => {
    ofCanvasArea.current.style.opacity = "1";
    ofCanvasArea.current.style.visibility = "visible";
    let header_bg = headerArea.current;
    header_bg.style.setProperty("mix-blend-mode", "unset");
  };
  return (
    <>
      <header className="header__area" ref={headerArea}>
        <div className="header__inner">
          <div className="header__logo">
            <Link href="/home">
              <Image
                priority
                width={33}
                height={100}
                className="logo-primary"
                src={LogoWhite}
                alt="Site Logo"
              />
              <Image
                priority
                width={100}
                height={33}
                className="logo-secondary"
                src={MobileLogo}
                alt="Moibile Logo"
              />
            </Link>
          </div>
          <div className="header__nav-icon">
            <button onClick={openCanvas} id="open_offcanvas">
              <Image
                priority
                width={22}
                height={22}
                src={MenuWhite}
                alt="Menubar Icon"
              />
            </button>
          </div>
          <div className="header__support">
            <div id="whatsapp-float">
              <a
                href="https://wa.me/923307474614"
                target="_blank"
                title="Connect with Sales Team"
              >
                <ImWhatsapp size={55} color="#FFFFFF" id="whatsappIcon" />
                {/* Render the icon directly */}
              </a>
            </div>
          </div>
        </div>
        <Canvas bladeMode={headerArea.current} ofCanvasArea={ofCanvasArea} />
      </header>
    </>
  );
}
