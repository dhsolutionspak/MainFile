// components/DigitalAgencyHero.js

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import ArrowDownBig from "../../../public/assets/imgs/icon/arrow-down-big.png";
import Image from "next/image";

const DigitalAgencyHero = () => {
  const heroTitle = useRef();
  const heroSubTitle = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".experience", {
          y: 50,
          opacity: 0,
        });
        let split_hero__title = new SplitText(heroTitle.current, {
          type: "chars",
        });
        let split_hero__subtitle = new SplitText(heroSubTitle.current, {
          type: "chars words",
        });

        gsap.from(split_hero__title.chars, {
          duration: 1,
          x: 70,
          autoAlpha: 0,
          stagger: 0.1,
        });
        gsap.from(
          split_hero__subtitle.words,
          { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 },
          "-=1"
        );

        gsap.to(
          ".experience",
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "-=1.5"
        );
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="hero__area">
        <div className="background-image"></div> {/* Background Image */}
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__content animation__hero_one">
                <Link href="/service-v5">
                  Strategy, Design, Solution Development{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
                <div className="hero__title-wrapper">
                  <h1 className="hero__title" ref={heroTitle}>
                    Transforming Ideas Innovation
                  </h1>
                  <p className="hero__sub-title" ref={heroSubTitle}>
                    With every single one of our clients, we bring forth deep
                    passion for <span>creative problem solving</span> which is
                    what we deliver.
                  </p>
                </div>
                <Image
                  priority
                  width={170}
                  style={{ height: "auto" }}
                  src={ArrowDownBig}
                  alt="Arrow Down Icon"
                />
                <div className="experience">
                  <h2 className="title">1000+</h2>
                  <p>
                    Projects completed <br />
                    successfully
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero__area {
          position: relative;
          overflow: hidden;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(https://travelshelper.com/wp-content/uploads/2021/11/Riyadh-Travel-Guide-Travel-S-Helper.jpg);
          background-size: cover;
          background-position: center;
        }

        .hero__content {
          position: relative;
          z-index: 1; /* Ensure the content appears over the background */
        }
          .hero__area.jsx-573eb287557d3399 {
          position: relative;
          overflow: hidden;
          background-image: url(https://travelshelper.com/wp-content/uploads/2021/11/Riyadh-Travel-Guide-Travel-S-Helper.jpg);
          background-size: cover;
          background-position: center;
}

.hero__area.jsx-573eb287557d3399:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1; /* Ensures overlay is above the image */
   
}
    .hero__area:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: url(https://travelshelper.com/wp-content/uploads/2021/11/Riyadh-Travel-Guide-Travel-S-Helper.jpg);
  
}

.hero__sub-title {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    color: #ffffff;
    max-width: 410px;
    position: absolute;
    right: 60px;
    bottom: 15px;
}

      `}</style>
    </>
  );
};

export default DigitalAgencyHero;
