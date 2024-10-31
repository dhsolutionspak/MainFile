import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/9/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/9/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/9/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/9/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetails = () => {
  return (
    <>
<Head>
    <title>Expert Computer Vision Services</title>
    <meta name="description" content="Unlock the potential of your data with our expert computer vision services, designed to enhance image analysis, automate visual tasks, and drive insights through advanced algorithms." />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
</Head>

      <main>
        <RootLayout header="header3" footer="footer3">
          <ServiceDetailsDevelopment />
          <ServiceDetailsWorkflow />
          <ServiceDetailsService />
          <ServiceDetailsFaq />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
