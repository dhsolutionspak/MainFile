import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/1/1.png";
import Service12 from "../../../public/assets/imgs/service/1/2.jpg";
import Service13 from "../../../public/assets/imgs/service/1/3.jpg";
import Service14 from "../../../public/assets/imgs/service/1/4.jpg";
import Service15 from "../../../public/assets/imgs/service/1/5.jpg";
import Service16 from "../../../public/assets/imgs/service/1/6.png";
import Service17 from "../../../public/assets/imgs/service/1/7.jpeg";
import Service18 from "../../../public/assets/imgs/service/1/8.png";
import Service19 from "../../../public/assets/imgs/service/1/9.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyService = () => {
  const [activeList, setActiveList] = useState(1);
  const [activeImg, setActiveImg] = useState(1);
  const [activeShape, setActiveShape] = useState(1);

  const serviceList = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let listItem = serviceList.current.children;
      console.log(listItem);
      for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener("mousemove", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveImg(parseInt(service_id));
          setActiveShape(parseInt(service_id));

          if (service_id != 1) {
            setActiveList(0);
          }
        });

        listItem[i].addEventListener("mouseout", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveList(parseInt(service_id));
        });
      }

      let tHero = gsap.context(() => {
        let home1_services = gsap.utils.toArray(".animation_home1_service");
        let service__number = gsap.utils.toArray(
          ".animation_home1_service .service__number span"
        );
        let service__title = gsap.utils.toArray(
          ".animation_home1_service .service__title"
        );
        let service__text = gsap.utils.toArray(
          ".animation_home1_service .service__text p"
        );
        let service__link = gsap.utils.toArray(
          ".animation_home1_service .service__link p"
        );

        home1_services.forEach((service, i) => {
          gsap.set(
            [
              service__number[i],
              service__title[i],
              service__text[i],
              service__link[i],
            ],
            { opacity: 0, x: -50 }
          );

          let home1ServiceTl = gsap.timeline({
            scrollTrigger: {
              trigger: service,
              start: "top center+=300",
              end: "bottom bottom",
              markers: false,
            },
          });

          home1ServiceTl.to(service__number[i], {
            x: 0,
            opacity: 1,
            duration: 1.2,
          });
          home1ServiceTl.to(
            service__title[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
          home1ServiceTl.to(
            service__text[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
          home1ServiceTl.to(
            service__link[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area pt-110 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="sec-title-wrapper wrap">
                <h2 className="sec-sub-title title-anim">service</h2>
                <h3 className="sec-title title-anim">
                  Solution we <br />
                  provide
                </h3>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="service__top-text text-anim">
                <p>
                  With every single one of our clients we bring forth a deep
                  passion for <span>creative problem solving innovations</span>{" "}
                  forward thinking brands boundaries
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__top-btn">
                <div className="btn_wrapper">
                  <Link
                    href="/service-v5"
                    className="btn-item wc-btn-secondary btn-hover"
                  >
                    <span></span> View <br />
                    all services <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="service__list-wrapper">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                <div className="service__img-wrapper">
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service11}
                    alt="Service Image"
                    className={
                      activeImg == 1
                        ? "service__img img-1 active"
                        : "service__img img-1"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service12}
                    alt="Service Image"
                    className={
                      activeImg == 2
                        ? "service__img img-2 active"
                        : "service__img img-2"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service13}
                    alt="Service Image"
                    className={
                      activeImg == 3
                        ? "service__img img-3 active"
                        : "service__img img-3"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service14}
                    alt="Service Image"
                    className={
                      activeImg == 4
                        ? "service__img img-4 active"
                        : "service__img img-4"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service15}
                    alt="Service Image"
                    className={
                      activeImg == 5
                        ? "service__img img-3 active"
                        : "service__img img-3"
                    }
                  />

                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service16}
                    alt="Service Image"
                    className={
                      activeImg == 6
                        ? "service__img img-3 active"
                        : "service__img img-3"
                    }
                  />

                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service17}
                    alt="Service Image"
                    className={
                      activeImg == 7
                        ? "service__img img-3 active"
                        : "service__img img-3"
                    }
                  />

                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service18}
                    alt="Service Image"
                    className={
                      activeImg == 8
                        ? "service__img img-3 active"
                        : "service__img img-3"
                    }
                  />

                   <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service19}
                    alt="Service Image"
                    className={
                      activeImg == 9
                        ? "service__img img-3 active"
                        : "service__img img-3"
                    }
                  />


                  <span
                    className={
                      activeShape == 1
                        ? "shapes shape-box-1 current"
                        : "shapes shape-box-1"
                    }
                  ></span>
                  <span
                    className={
                      activeShape == 2
                        ? "shapes shape-box-2 current"
                        : "shapes shape-box-2"
                    }
                  ></span>
                  <span
                    className={
                      activeShape == 3
                        ? "shapes shape-box-3 current"
                        : "shapes shape-box-3"
                    }
                  ></span>
                  <span
                    className={
                      activeShape == 4
                        ? "shapes shape-box-4 current"
                        : "shapes shape-box-4"
                    }
                  ></span>

                    <span
                    className={
                      activeShape == 5
                        ? "shapes shape-box-4 current"
                        : "shapes shape-box-4"
                    }
                  ></span>

                    <span
                    className={
                      activeShape == 6
                        ? "shapes shape-box-4 current"
                        : "shapes shape-box-4"
                    }
                  ></span>

                    <span
                    className={
                      activeShape == 7
                        ? "shapes shape-box-4 current"
                        : "shapes shape-box-4"
                    }
                  ></span>

                    <span
                    className={
                      activeShape == 8
                        ? "shapes shape-box-4 current"
                        : "shapes shape-box-4"
                    }
                  ></span>

                    <span
                    className={
                      activeShape == 9
                        ? "shapes shape-box-4 current"
                        : "shapes shape-box-4"
                    }
                  ></span>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                <div className="service__list" ref={serviceList}>
                  <Link
                    href="/service-details-1"
                    className={activeList == 1 ? "active" : ""}
                    data-service="1"
                  >
                    <div className="service__item animation_home1_service">
                      <div className="service__number">
                        <span>01</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Front End Development
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                        DH Solutions creates responsive, user-friendly interfaces for web and mobile using modern technologies.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/service-details-2"
                    className={activeList == 2 ? "active" : ""}
                    data-service="2"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>02</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Backend Development 
                          
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                        DH Solutions builds secure and scalable server-side applications with Node.js, Python, and SQL.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                   href="/service-details-3"
                    className={activeList == 3 ? "active" : ""}
                    data-service="3"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>03</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Mobile App <br />
                          Development
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                        DH Solutions develops high-performance mobile apps for iOS and Android platforms.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/service-details-4"
                    className={activeList == 4 ? "active" : ""}
                    data-service="4"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>04</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          AI/ML <br/>
                          Solutions
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                        DH Solutions leverages AI/ML to drive automation and enhance business decision-making.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                   href="/service-details-5"
                    className={activeList == 5 ? "active" : ""}
                    data-service="5"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>05</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Cyber <br/>
                          Security
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                        DH Solutions provides robust cybersecurity services to protect digital assets from threats.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/service-details-6"
                    className={activeList == 6 ? "active" : ""}
                    data-service="6"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>06</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          DevOps <br/>
                          Solutions
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                        DH Solutions streamlines development and deployment processes through effective DevOps practices.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/service-details-7"
                    className={activeList == 7 ? "active" : ""}
                    data-service="7"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>07</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Custom Software <br/>
                          Development
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                        DH Solutions delivers tailored software solutions to meet specific business requirements.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/service-details-8"
                    className={activeList == 8 ? "active" : ""}
                    data-service="8"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>08</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Quality Assurance & <br/>
                          Testing
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                        DH Solutions ensures software quality and reliability through comprehensive QA and testing services.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/service-details-9"
                    className={activeList == 9 ? "active" : ""}
                    data-service="9"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>09</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Computer <br/>
                          Vision
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                        DH Solutions offers advanced computer vision solutions for automated visual data analysis.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyService;
