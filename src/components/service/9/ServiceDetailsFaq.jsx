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
                  alt="Computer Vision FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">
                  Frequently Asked Questions about Computer Vision Services
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
                        What is Computer Vision?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Computer Vision is a field of artificial intelligence
                          that enables computers to interpret and understand the
                          visual world. It involves the extraction, analysis, and
                          understanding of information from images and videos.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        What industries can benefit from Computer Vision?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Various industries such as healthcare, retail, automotive,
                          and agriculture can leverage computer vision for tasks
                          like quality inspection, automated surveillance, and
                          inventory management.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        How can Computer Vision improve efficiency?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          By automating tasks such as object detection and
                          recognition, computer vision can significantly reduce
                          human error, speed up processes, and provide accurate
                          insights that drive better decision-making.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFour"
                      >
                        What are some applications of Computer Vision?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Applications include facial recognition, autonomous
                          vehicles, image classification, and augmented reality.
                          These technologies enhance user experiences and enable
                          new functionalities.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFive"
                      >
                        How can DH Solutions help with Computer Vision projects?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          DH Solutions offers comprehensive computer vision services,
                          from consultation and solution design to implementation
                          and support, ensuring that your project meets its
                          objectives efficiently and effectively.
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
