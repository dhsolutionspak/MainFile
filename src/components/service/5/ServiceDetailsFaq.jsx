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
                  alt="Cybersecurity FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">
                  Cybersecurity Services FAQs
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
                        What is cybersecurity?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Cybersecurity refers to the practice of protecting
                          systems, networks, and programs from digital attacks,
                          which aim to access, change, or destroy sensitive
                          information.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        Why do I need cybersecurity services?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          With the increasing number of cyber threats, it is
                          crucial to protect your business data and systems
                          from attacks that can lead to significant financial
                          and reputational damage.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        How can DH Solutions help with cybersecurity?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          DH Solutions provides a range of cybersecurity
                          services, including threat assessment, incident
                          response, and network security, tailored to your
                          organization&apos;s unique needs.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFour"
                      >
                        What types of cyber threats exist?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Common cyber threats include malware, phishing,
                          ransomware, and denial-of-service attacks, each
                          targeting different vulnerabilities in systems and
                          networks.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFive"
                      >
                        How often should I update my cybersecurity measures?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Regular updates are essential, as cyber threats are
                          constantly evolving. It is recommended to review and
                          update your security measures at least annually, or
                          whenever a significant change occurs within your
                          organization.
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
