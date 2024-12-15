import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/2/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/2/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/2/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/2/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetails = () => {
  return (
    <>
      <Head>
    <title>Expert Backend Development Services</title>
    <meta name="description" content="Unlock powerful backend development services that ensure security, scalability, and seamless integration, tailored to enhance your business operations and support complex applications." />
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
