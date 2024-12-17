import React, { useEffect, useRef, useState } from "react";
import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";

const Contact1 = () => {
  const charAnim = useRef(null);
  const wordAnim = useRef(null);
  const [status, setStatus] = useState(null); // State to manage success/error message
  const [selectedService, setSelectedService] = useState(""); // State for dropdown

  // Array of services
  const services = [
    "Web Development",
    "Mobile App Development",
    "AI/ML Solutions",
    "Cyber Security",
    "DEVOPS Solutions",
    "Custom Software Development",
    "QA & Testing",
    "Computer Vision",
    "Other",
  ];

  // Trigger animations on component mount
  useEffect(() => {
    if (charAnim.current) animationCharCome(charAnim.current);
    if (wordAnim.current) animationWordCome(wordAnim.current);
  }, []);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Email sent successfully!" });
        e.target.reset(); // Reset the form on success
        setSelectedService(""); // Reset the dropdown
      } else {
        const result = await response.json();
        setStatus({
          type: "error",
          message: result.message || "Failed to send email. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }

    // Remove the status message after 5 seconds
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="contact__area-6">
      <div className="container g-0 line pt-120 pb-110">
        <span className="line-3"></span>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="sec-title-wrapper">
              <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                Lets get in touch
              </h2>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="contact__text">
              <p>
                Great! We are excited to hear from you. Lets start something
                special together. Call us for any inquiry.
              </p>
            </div>
          </div>
        </div>
        <div className="row contact__btm">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
            <div className="contact__info">
              <h3
                className="sub-title-anim-top animation__word_come"
                ref={wordAnim}
              >
                {"Dont be afraid, man!"}
                <br />
                say hello
              </h3>
              <ul>
                <li>
                  <a href="https://wa.me/19255589107">(+1) 925 558 9107</a>
                </li>
                <li>
                  <a href="mailto:hello@dhsol.net">hello@dhsol.net</a>
                </li>
                <li>
                  <span>
                    1309 Coffeen Ave. Sheridan, Wyoming , <br /> (USA) 82801
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
            <div className="contact__form">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      required
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required
                    />
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <input type="tel" name="phone" placeholder="Phone" />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      required
                    />
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <select
                      name="services"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                      style={{
                        width: "100%", // Ensures the dropdown takes full width
                        padding: "12px", // Matches the input field height
                        fontSize: "16px", // Matches font size of input fields
                        borderRadius: "5px", // Ensures rounded corners
                        border: "1px solid #ccc", // Adds border similar to input fields
                      }}
                    >
                      <option value="" disabled>
                        Select a service *
                      </option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-12">
                    <textarea
                      name="message"
                      placeholder="Messages *"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="btn_wrapper">
                      <button
                        type="submit"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> Send <br />
                        Messages <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {status && (
                <p
                  style={{
                    color: status.type === "success" ? "green" : "red",
                    marginTop: "10px",
                  }}
                >
                  {status.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact1;
