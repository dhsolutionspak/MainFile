import animationCharCome from "@/lib/utils/animationCharCome";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const ServiceElementV5 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  
  return (
    <div>
      <section className="portfolio__service service-v5 pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <h2 className="sec-title animation__char_come" ref={charAnim}>
                WE MAKE THE Service BETTER.
              </h2>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-text">
                <p>
                At DH Solutions, we elevate your business with tailored digital solutions that drive impact and efficiency. Our expert team leverages cutting-edge technology to transform challenges into scalable successes.
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio__service-list">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-1">
                    <h3 className="ps-title">
                      Frontend <br /> Development
                    </h3>
                    <ul>
                      <li>+ Responsive Web Design</li>
                      <li>+ HTML5 & CSS3</li>
                      <li>+ JavaScript & TypeScript</li>
                      <li>+ React & Vue.js</li>
                      <li>+ UI/UX Prototyping</li>
                      <li>+ Performance Optimization</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-2">
                    <h3 className="ps-title">
                      Backend <br /> Development
                    </h3>
                    <ul>
                      <li>+ API Development & Integration</li>
                      <li>+ Database Management </li>
                      <li>+ RESTful & GraphQL Services</li>
                      <li>+ User Authentication & Authorization</li>
                      <li>+ Microservices Architecture</li>
                      <li>+ Server-Side Logic & Business Logic</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-3">
                    <h3 className="ps-title">
                      Mobile App <br /> Development
                    </h3>
                    <ul>
                      <li>+ Cross-Platform Development</li>
                      <li>+ Native App Development</li>
                      <li>+ App Store Optimization</li>
                      <li>+ User-Centric Design</li>
                      <li>+ In-App Purchase Integration</li>
                      <li>+ App Maintenance & Support</li>
                    </ul>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-4">
                    <h3 className="ps-title">
                      AI/ML <br /> Solutions
                    </h3>
                    <ul>
                      <li>+ Predictive Analytics</li>
                      <li>+ Natural Language Processing</li>
                      <li>+ Computer Vision</li>
                      <li>+ Recommendation Systems</li>
                      <li>+ Automated Machine Learning </li>
                      <li>+ AI Model Deployment</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-5">
                    <h3 className="ps-title">
                      Cyber <br /> Security
                    </h3>
                    <ul>
                      <li>+ Threat Assessment & Risk Analysis</li>
                      <li>+ Network Security Solutions</li>
                      <li>+ Vulnerability Management</li>
                      <li>+ Incident Response Planning</li>
                      <li>+ Data Encryption & Protection</li>
                      <li>+ Security Awareness Training</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-6">
                    <h3 className="ps-title">
                      DevOps <br /> Solutions
                    </h3>
                    <ul>
                      <li>+ CI/CD Pipeline Development</li>
                      <li>+ Infrastructure as Code (IaC)</li>
                      <li>+ Containerization (Docker, Kubernetes)</li>
                      <li>+ Monitoring & Logging Solutions</li>
                      <li>+ Configuration Management</li>
                      <li>+ Cloud Solutions & Migrations</li>
                    </ul>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-7">
                    <h3 className="ps-title">
                      Custom Software <br /> Development
                    </h3>
                    <ul>
                      <li>+ Tailored Software Solutions</li>
                      <li>+ Enterprise Resource Planning</li>
                      <li>+ Customer Relationship Management </li>
                      <li>+ E-Commerce Platforms</li>
                      <li>+ SaaS Development</li>
                      <li>+ Application Modernization</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-8">
                    <h3 className="ps-title">
                      QA & <br /> Testing
                    </h3>
                    <ul>
                      <li>+ Manual & Automated Testing</li>
                      <li>+ Test Case Development</li>
                      <li>+ Performance Testing</li>
                      <li>+ Security Testing</li>
                      <li>+ User Acceptance Testing </li>
                      <li>+ Continuous Testing Integration</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-9">
                    <h3 className="ps-title">
                      Computer <br /> Vision
                    </h3>
                    <ul>
                      <li>+ Image Processing & Analysis</li>
                      <li>+ Object Detection & Recognition</li>
                      <li>+ Facial Recognition Technology</li>
                      <li>+ Augmented Reality (AR) Solutions</li>
                      <li>+ Visual Data Mining</li>
                      <li>+ Video Analytics Solutions</li>
                    </ul>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceElementV5;
