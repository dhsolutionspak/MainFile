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
                  alt="DevOps FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">
                  Frequently Asked Questions about DevOps
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
                        What is DevOps?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          DevOps is a set of practices that combine software development (Dev) and IT operations (Ops), aiming to shorten the development lifecycle while delivering features, fixes, and updates frequently in close alignment with business objectives.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        What are the benefits of implementing DevOps?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Implementing DevOps leads to improved collaboration between teams, faster delivery of features, increased deployment success rates, reduced change failure rates, and more reliable software releases.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        How does DevOps ensure quality in software delivery?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          DevOps integrates automated testing and continuous integration practices that help catch defects early in the development process, leading to higher quality software delivery.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFour"
                      >
                        What tools are commonly used in DevOps?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Commonly used tools in DevOps include Jenkins for CI &amp; CD, Docker for containerization, Kubernetes for orchestration, Git for version control, and monitoring tools like Prometheus and Grafana.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFive"
                      >
                        How can I start implementing DevOps in my organization?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Start by fostering a culture of collaboration between development and operations teams, adopt automation tools for testing and deployment, and implement continuous integration/continuous delivery practices.
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
