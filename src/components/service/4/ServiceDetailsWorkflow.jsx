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
                    Data Collection and <br />
                    Preparation
                  </h6>
                  <p>
                    Gathering relevant data from various sources and preparing it for analysis is crucial. This step ensures that the data is clean, structured, and ready for model training.
                  </p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    Model Development <br />
                    and Training
                  </h6>
                  <p>
                    Utilizing advanced algorithms and frameworks, we develop and train machine learning models to identify patterns and make predictions based on the prepared data.
                  </p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    Model Evaluation <br />
                    and Tuning
                  </h6>
                  <p>
                    After training, we rigorously evaluate the models using various metrics. This step includes fine-tuning parameters to enhance performance and ensure reliability.
                  </p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    Deployment and <br />
                    Monitoring
                  </h6>
                  <p>
                    Once the model meets performance standards, it is deployed into production. Continuous monitoring ensures its effectiveness and allows for timely updates based on new data and feedback.
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
