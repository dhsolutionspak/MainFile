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
                  Frequently Asked Questions about AI & ML Solutions
                </h2>

                <div className="faq__list">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion"
                    id="accordionExample"
                  >
                    <Accordion.Item eventKey="0" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingOne"
                      >
                        How does AI enhance user experience?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          AI enhances user experience by analyzing user behavior and preferences, allowing for personalized interactions and content that resonate with individual users.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        What role does machine learning play in AI applications?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Machine learning algorithms enable AI applications to learn from data, improving accuracy and effectiveness over time by adapting to new information and patterns.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        How do AI solutions ensure data privacy?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Our AI solutions prioritize data privacy by implementing strong encryption, anonymization techniques, and adhering to industry standards for data protection.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFour"
                      >
                        Can AI help in predictive analytics?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Yes, AI is instrumental in predictive analytics, as it can process vast amounts of data to identify trends and make accurate predictions that inform decision-making.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFive"
                      >
                        How does AI improve application performance?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          AI optimizes application performance by utilizing real-time analytics to monitor user interactions, enabling developers to make data-driven improvements that enhance speed and efficiency.
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
