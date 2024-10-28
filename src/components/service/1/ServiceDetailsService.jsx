import ServiceDetail from "../../../../public/assets/imgs/thumb/services-page.svg";
import Shape6 from "../../../../public/assets/imgs/icon/shape-6.png";
import Image from "next/image";

const ServiceDetailsService = () => {
  return (
    <>
      <section className="service__detail">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  Your Trusted Partner for Exceptional Front-End Development Services
                </h2>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__detail-circle">
                <span></span>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div className="service__detail-img">
                <Image
                  priority
                  width={960}
                  style={{ height: "auto" }}
                  src={ServiceDetail}
                  alt="High-quality Front-End Development Service"
                />
                <Image
                  priority
                  width={51}
                  style={{ height: "auto" }}
                  src={Shape6}
                  alt="Design Element"
                  className="sd-shape"
                />
              </div>
              <div className="service__detail-content">
                <p>
                  At DH Solutions, we provide front-end development solutions that are tailored to meet your specific needs. Our team ensures that you receive stunning designs and seamless user experiences, all delivered within a few business days.
                </p>
                <p>
                  Our commitment goes beyond just aesthetics, we focus on effectively communicating your brands message. We create engaging and dynamic web applications that connect with your audience across various platforms, elevating your online presence and driving engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsService;
