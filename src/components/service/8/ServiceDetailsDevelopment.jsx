import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../../public/assets/imgs/thumb/left-top/8.svg";
import ThumbDev2 from "../../../../public/assets/imgs/thumb/right-top/8.svg";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceDetailsDevelopment = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  
  return (
    <>
      <section className="development__area">
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  Comprehensive QA and Testing Services
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                    At DH Solutions, we offer thorough QA and testing services designed to ensure your software products meet the highest standards of quality. Our experienced team uses systematic testing methods to identify issues and improve performance, enhancing user satisfaction.
                  </p>
                  <p>
                    We believe in a proactive approach to quality assurance, integrating testing processes early in the development cycle. This ensures that your applications are not only functional but also reliable and efficient, ultimately reducing time-to-market and enhancing overall product quality.
                  </p>
                </div>
                <ul>
                  <li>+ Functional Testing</li>
                  <li>+ Performance Testing</li>
                  <li>+ Security Testing</li>
                  <li>+ Usability Testing</li>
                  <li>+ Automated Testing Solutions</li>
                  <li>+ Regression Testing</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev1}
                  alt="Quality Assurance Testing"
                  data-speed="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Styled JSX for scoping CSS to this component */}
       <style jsx>{`

.col-xxl-8 {
flex: 0 0 auto;
width: 100%;
}

`}</style>

    </>
  );
};

export default ServiceDetailsDevelopment;
