import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BGPIC from "../../../public/assets/imgs/about/bgpic.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const AboutTestimonial = () => {
  return (
    <>
      <section className="testimonial__area-2">
        <div className="container g-0 line pb-140">
          <span className="line-3"></span>

          <div className="row g-0">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="testimonial__video">
                <video autoPlay muted loop>
                  <source src="assets/video/testimonial.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="testimonial__slider-wrapper-2">
                <div className="testimonial__slider">
                  <Swiper
                    modules={[FreeMode, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    freeMode={true}
                    loop={true}
                    speed={2000}
                    navigation={{
                      nextEl: ".next-button",
                      prevEl: ".prev-button",
                    }}
                  >
                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Transformative Digital Presence
                          </h2>
                          <p className="testimonial__text-2">
                            &quot;DH Solutions completely transformed our
                            digital presence. They captured our brand&apos;s
                            essence beautifully, delivering a seamless and
                            impactful experience for our customers. Truly
                            impressive work!&quot;
                          </p>
                          <h3 className="testimonial__author">Alex M.</h3>
                          <h4 className="testimonial__role">
                            CEO of Global Retail Group
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Streamlined Operations & Efficiency
                          </h2>
                          <p className="testimonial__text-2">
                            &quot;Partnering with DH Solutions has been a
                            game-changer. Their innovative solutions and
                            attention to detail have streamlined our operations,
                            improving efficiency across our entire organization.
                            Highly recommended!&quot;
                          </p>
                          <h3 className="testimonial__author">Sarah L.</h3>
                          <h4 className="testimonial__role">
                            Head of Operations, MENA Distributors
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Exceptional Service & Quality
                          </h2>
                          <p className="testimonial__text-2">
                            &quot;From day one, DH Solutions offered exceptional
                            service. They listened closely to our needs and
                            delivered a robust, user-friendly platform central
                            to our business. Their commitment to quality is
                            unmatched.&quot;
                          </p>
                          <h3 className="testimonial__author">
                            Muhammad Ibrahim
                          </h3>
                          <h4 className="testimonial__role">CEO of SRide</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="testimonial__pagination">
                  <div style={{ cursor: "pointer" }} className="prev-button">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <div style={{ cursor: "pointer" }} className="next-button">
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTestimonial;
