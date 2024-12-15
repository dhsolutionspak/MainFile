import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../../public/assets/imgs/thumb/left-top/9.svg";
import ThumbDev2 from "../../../../public/assets/imgs/thumb/right-top/9.svg";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceDetailsComputerVision = () => {
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
                  Expert Computer Vision Services
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                    At DH Solutions, we specialize in delivering exceptional computer vision services tailored to meet your unique business needs. Our expert team ensures that every project aligns with your objectives, focusing on creating intelligent solutions that enhance user experience.
                  </p>
                  <p>
                    Our approach is unique; we recognize that each project presents an opportunity to innovate. We utilize the latest technologies and frameworks to develop computer vision solutions that drive results, helping you achieve your goals efficiently.
                  </p>
                </div>
                <ul>
                  <li>+ Image and Video Analysis</li>
                  <li>+ Object Detection and Tracking</li>
                  <li>+ Facial Recognition Systems</li>
                  <li>+ Augmented Reality Solutions</li>
                  <li>+ Optical Character Recognition (OCR)</li>
                  <li>+ Automated Quality Inspection</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev1}
                  alt="Computer Vision Technology"
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

export default ServiceDetailsComputerVision;
