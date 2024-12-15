import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../../public/assets/imgs/thumb/left-top/4.svg";
import ThumbDev2 from "../../../../public/assets/imgs/thumb/right-top/4.svg";
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
                  AI & Machine Learning Solutions
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                    At DH Solutions, we provide advanced AI and machine learning solutions designed to enhance your business operations. Our dedicated team harnesses the power of AI to deliver tailored solutions that drive innovation and efficiency.
                  </p>
                  <p>
                    We focus on understanding your unique challenges and leveraging machine learning algorithms to develop predictive models, automate processes, and extract actionable insights from your data.
                  </p>
                </div>
                <ul>
                  <li>+ Predictive Analytics</li>
                  <li>+ Natural Language Processing (NLP)</li>
                  <li>+ Image Recognition</li>
                  <li>+ AI-Enhanced Security</li>
                  <li>+ Custom Machine Learning Models</li>
                </ul>
                <div className="development__content mt-4">
                  <h3>Our AI/ML Offerings</h3>
                  <p>
                    Our AI and ML offerings include personalized recommendations, automated decision-making processes, and intelligent data analysis to empower your business with data-driven strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev1}
                  alt="AI and Machine Learning Solutions"
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
