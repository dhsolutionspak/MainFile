import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../../public/assets/imgs/thumb/left-top/5.svg";
import ThumbDev2 from "../../../../public/assets/imgs/thumb/right-top/5.svg";
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
                  Comprehensive Cybersecurity Solutions
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                    At DH Solutions, we specialize in delivering comprehensive cybersecurity solutions tailored to protect your organization from evolving digital threats. Our expert team focuses on creating robust security measures that ensure the integrity and confidentiality of your data.
                  </p>
                  <p>
                    Our approach is proactive; we recognize that each organization has unique security challenges. We utilize the latest technologies and best practices to develop solutions that safeguard your infrastructure and mitigate risks effectively.
                  </p>
                </div>
                <ul>
                  <li>+ Threat Assessment and Management</li>
                  <li>+ Network Security Solutions</li>
                  <li>+ Incident Response and Recovery</li>
                  <li>+ Data Encryption and Protection</li>
                  <li>+ Compliance and Risk Management</li>
                  <li>+ Security Awareness Training</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev1}
                  alt="Cybersecurity Measures"
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
