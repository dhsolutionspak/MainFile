import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../../public/assets/imgs/thumb/left-top/3.svg";
import ThumbDev2 from "../../../../public/assets/imgs/thumb/right-top/3.svg";
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
                  Expert Mobile App Development Services
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                    At DH Solutions, we are dedicated to delivering exceptional mobile app development services designed to bring your vision to life. Our expert team specializes in building user-friendly, high-performance apps tailored to meet the unique needs of your business.
                  </p>
                  <p>
                    We believe that each project is an opportunity to innovate and create value. Using cutting-edge frameworks and technologies, we ensure that every app we develop is optimized for performance, user engagement, and cross-platform compatibility.
                  </p>
                </div>
                <ul>
                  <li>+ Cross-Platform Development (React Native, Flutter)</li>
                  <li>+ Native App Development (iOS & Android)</li>
                  <li>+ User Interface (UI) & User Experience (UX) Design</li>
                  <li>+ API Integration & Backend Services</li>
                  <li>+ Performance Optimization</li>
                  <li>+ Testing & Quality Assurance</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev1}
                  alt="Mobile App Development"
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
