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
                  Quality Assurance and Testing FAQs
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
                        What is Quality Assurance (QA)?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Quality Assurance (QA) is a systematic process designed to determine if the products meet the specified requirements and are free of defects. It focuses on improving and stabilizing production and associated processes to avoid defects.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        Why is testing important in software development?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Testing is crucial as it helps identify bugs before the software is deployed, ensuring that the final product is reliable and performs as expected. It ultimately enhances user satisfaction and minimizes maintenance costs.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        What types of testing do you offer?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          We offer a range of testing services, including functional testing, performance testing, security testing, usability testing, and automated testing solutions tailored to meet your specific needs.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFour"
                      >
                        How do you ensure the quality of your testing?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          We follow a structured testing methodology, leveraging industry best practices, advanced tools, and frameworks. Our experienced QA team conducts thorough testing at each stage of the development process to ensure high-quality deliverables.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFive"
                      >
                        Can you integrate testing into my existing development process?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Yes, we can seamlessly integrate our testing services into your existing development workflow, ensuring minimal disruption while enhancing the overall quality of your software products.
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
