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
                  Designing Products for User Friendliness
                </h2>

                <div className="faq__list">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion"
                    id="accordionExample"
                  >
                    <Accordion.Item eventKey="0" className="accordion-item">
                      <Accordion.Header className="accordion-header">
                        Enriching Daily Experiences Through Design
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Our design services start and end with a top-tier experience strategy aimed at building strong brands. We use an iterative process with prototyping to create interfaces that bring joy and functionality to users.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header className="accordion-header">
                        Combining Creative Expertise and Individual Experience
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          We bring together diverse experiences and creativity to develop custom solutions. Our approach involves detailed design, strategic planning, and a commitment to user-centered practices for impactful results.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header className="accordion-header">
                        Human-Centered Design for Real-World Challenges
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          By focusing on human-centered design, we address real-world challenges and enhance usability. Our goal is to create solutions that are intuitive and cater to the needs of end-users, adding true value to their daily lives.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header className="accordion-header">
                        Enhancing User Experience Through Iteration
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Iteration is key to our design process. By continuously refining and testing, we ensure that the final product meets high standards of quality, usability, and performance, providing an enriched user experience.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="accordion-item">
                      <Accordion.Header className="accordion-header">
                        Building Core Web Applications
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Our development team specializes in creating powerful web applications that integrate seamlessly into your business. We prioritize performance, scalability, and security to deliver solutions that meet your core business needs.
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
