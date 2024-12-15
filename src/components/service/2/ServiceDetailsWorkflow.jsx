const ServiceDetailsWorkflow = () => {
  return (
    <>
      <section className="workflow__area-6">
        <div className="container g-0 line pb-130">
          <div className="line-3"></div>
          <div className="workflow__wrapper-6">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    Requirements <br />
                    Analysis
                  </h6>
                  <p>
                    We begin with a thorough analysis of project requirements to ensure the backend architecture aligns with the business objectives and technical constraints.
                  </p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    Database <br />
                    Design
                  </h6>
                  <p>
                    Crafting a robust database schema optimized for performance, scalability, and data integrity to support the application’s data needs.
                  </p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    API <br />
                    Development
                  </h6>
                  <p>
                    Developing secure and scalable APIs that enable smooth communication between the frontend and backend, providing essential data and functionality.
                  </p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    Testing & <br />
                    Deployment
                  </h6>
                  <p>
                    Rigorous testing ensures the backend performs as expected. We deploy to production environments and provide continuous monitoring and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsWorkflow;
