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
                  Your Trusted Partner for Exceptional Cybersecurity Services
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
                  alt="High-quality Cybersecurity Service"
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
                  At DH Solutions, we provide comprehensive cybersecurity solutions tailored to safeguard your business. Our team of experts ensures robust protection against cyber threats, offering peace of mind and security within a matter of days.
                </p>
                <p>
                  Our commitment extends beyond protection; we focus on empowering your business through proactive security measures. We create secure and resilient systems that protect your data and enhance your operational integrity, elevating your overall security posture.
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
