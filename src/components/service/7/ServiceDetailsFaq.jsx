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
                  Frequently Asked Questions About Custom Software Development
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
                        What is custom software development?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Custom software development is the process of designing, building, and maintaining software applications that are tailored specifically to meet the unique needs of a business or organization.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        How long does it take to develop custom software?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          The timeline for custom software development varies based on project complexity, requirements, and the development methodology used. Generally, it can take from a few weeks to several months.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        What are the benefits of custom software?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Custom software provides solutions that are specifically designed to meet your business goals, improve efficiency, enhance user experience, and provide a competitive advantage.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFour"
                      >
                        How do you ensure the quality of the software?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          We implement rigorous testing and quality assurance processes throughout the development lifecycle to ensure that the software meets high standards of quality, functionality, and performance.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFive"
                      >
                        What support do you offer after development?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          We provide comprehensive post-development support, including software maintenance, updates, troubleshooting, and enhancements to ensure your software continues to meet your needs over time.
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
