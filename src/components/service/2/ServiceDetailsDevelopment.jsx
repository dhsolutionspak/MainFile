import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../../public/assets/imgs/thumb/left-top/2.svg";
import ThumbDev2 from "../../../../public/assets/imgs/thumb/right-top/2.svg";
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
                  Expert Backend Development Services
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                    At DH Solutions, we specialize in providing robust backend development services that serve as the backbone for your applications. Our skilled team focuses on building secure, scalable, and high-performance systems that align with your business requirements.
                  </p>
                  <p>
                    We adopt a unique approach to backend development, treating each project as an opportunity to create seamless integrations and efficient workflows. Utilizing the latest technologies and frameworks, we build solutions that support your frontend interfaces and drive exceptional user experiences.
                  </p>
                </div>
                <ul>
                  <li>+ RESTful API Development</li>
                  <li>+ Database Management (SQL & NoSQL)</li>
                  <li>+ Server-Side Logic and Security</li>
                  <li>+ Cloud Integration and Deployment</li>
                  <li>+ Microservices Architecture</li>
                  <li>+ Scalability and Performance Optimization</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev1}
                  alt="Backend Development"
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
