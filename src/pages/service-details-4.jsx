import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/4/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/4/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/4/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/4/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetails = () => {
  return (
    <>
    <Head>
    <title>AI and Machine Learning Solutions</title>
    <meta name="description" content="Empower your business with advanced AI and machine learning solutions designed to optimize operations, enhance decision-making, and drive growth through intelligent automation and data insights." />
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
