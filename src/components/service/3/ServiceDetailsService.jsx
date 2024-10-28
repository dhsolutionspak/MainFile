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
                  Your Trusted Partner for Exceptional Mobile App Development Services
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
                  alt="High-quality Mobile App Development Service"
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
                  At DH Solutions, we specialize in mobile app development solutions tailored to empower your brand on all major platforms. Our dedicated team designs and develops apps that are visually appealing, highly functional, and user-friendly, ensuring seamless experiences across devices.
                </p>
                <p>
                  With a commitment to quality and innovation, we focus on creating apps that not only engage users but also drive measurable growth. Our comprehensive approach, from ideation to deployment, ensures your app reflects your brand’s vision and delivers exceptional value to your audience.
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
