import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../../public/assets/imgs/thumb/left-top/7.svg";
import ThumbDev2 from "../../../../public/assets/imgs/thumb/right-top/7.svg";
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
                  Custom Software Development Services
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                    At DH Solutions, we excel in providing tailored custom software development services that cater to your specific business requirements. Our dedicated team ensures that every solution is aligned with your goals, emphasizing functionality, scalability, and user experience.
                  </p>
                  <p>
                    We understand that each project is unique and offers a chance for innovation. By leveraging cutting-edge technologies and agile methodologies, we create software solutions that not only meet your expectations but also drive business growth and efficiency.
                  </p>
                </div>
                <ul>
                  <li>+ Bespoke Software Solutions</li>
                  <li>+ Mobile Application Development</li>
                  <li>+ Web Application Development</li>
                  <li>+ API Development & Integration</li>
                  <li>+ Cloud Solutions & Services</li>
                  <li>+ Software Maintenance & Support</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev1}
                  alt="Custom Software Development"
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
