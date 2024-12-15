import { FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const DigitalAgencyRoll = () => {
  return (
    <>
      <section className="roll__area">
        <div className="roll__slider">
          <Swiper
            modules={[FreeMode, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            centeredSlides={true}
            allowTouchMove={false}
            speed={2000}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
              1900: {
                slidesPerView: 8,
              },
            }}
          >
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Website Development</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>App Development</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Artificial Intelligence</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Cyber Security</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Machine Leaning</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Data Science</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Digitalization</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Marketing</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Cloud Solutions</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>DevOps Solutions</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Automation</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>QA and Testing </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Product Development</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>ECommerce</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Computer Vision</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>IT Consultancy</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Staff Augmentation </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Web Applications</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Branding</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyRoll;
