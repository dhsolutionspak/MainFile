import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/7/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/7/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/7/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/7/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetails = () => {
  return (
    <>
<Head>
    <title>Custom Software Development Services</title>
    <meta name="description" content="Transform your business with tailored custom software development services designed to meet your unique needs, enhance efficiency, and drive innovation through scalable solutions." />
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
