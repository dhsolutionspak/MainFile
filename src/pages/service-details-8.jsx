import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/8/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/8/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/8/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/8/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetails = () => {
  return (
    <>
<Head>
    <title>Comprehensive QA and Testing Services</title>
    <meta name="description" content="Ensure the highest quality of your software with our comprehensive QA and testing services, designed to identify bugs, enhance performance, and deliver a seamless user experience." />
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
