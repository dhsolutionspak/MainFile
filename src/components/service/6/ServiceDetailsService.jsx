import ServiceDetail from "../../../../public/assets/imgs/thumb/services-page.svg";
import Shape6 from "../../../../public/assets/imgs/icon/shape-6.png"; // Adjust this image if needed
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
                  Your Trusted Partner for Exceptional DevOps Services
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
                  alt="High-quality DevOps Service"
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
                  At DH Solutions, we provide comprehensive DevOps services designed to streamline your development and operational processes. Our experienced team focuses on automation, continuous integration, and delivery to ensure faster time-to-market for your applications.
                </p>
                <p>
                  Our commitment extends beyond just technology; we aim to foster collaboration between your development and operations teams. By leveraging best practices and innovative tools, we enhance your software delivery lifecycle, improve quality, and boost overall productivity.
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
