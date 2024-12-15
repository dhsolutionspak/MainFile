import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../../public/assets/imgs/thumb/faq.svg";
import Image from "next/image";

const ServiceDetailsFaq = () => {
  return (
    <>
      <section className="faq__area">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbFaq}
                  alt="FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">
                  Mobile App Development FAQ
                </h2>

                <div className="faq__list">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion"
                    id="accordionExample"
                  >
                    <Accordion.Item eventKey="0" className="accordion-item">
                      <Accordion.Header className="accordion-header" id="headingOne">
                        What platforms do you develop mobile apps for?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          We specialize in developing mobile applications for both iOS and Android platforms. Our team uses cross-platform frameworks like React Native and Flutter, as well as native development for more customized requirements.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header className="accordion-header" id="headingTwo">
                        How long does it take to develop a mobile app?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Development timelines vary depending on the complexity of the app and the features involved. On average, a standard app takes 3 to 6 months to develop from concept to launch, while more complex apps may require additional time.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header className="accordion-header" id="headingThree">
                        Can you help with app design as well?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Yes, our team includes skilled UI/UX designers who work closely with clients to create visually appealing, user-friendly interfaces. We prioritize human-centered design to ensure an engaging experience for your app users.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header className="accordion-header" id="headingFour">
                        What is the cost of mobile app development?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          The cost of developing a mobile app depends on various factors such as app complexity, features, design, and the platforms targeted. We provide tailored estimates after a thorough assessment of your project requirements.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="accordion-item">
                      <Accordion.Header className="accordion-header" id="headingFive">
                        Do you offer post-launch support?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Absolutely. We provide ongoing maintenance and support services to ensure your app remains up-to-date and functions smoothly post-launch. This includes bug fixes, updates, and adding new features as needed.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsFaq;
