import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/1/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/1/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/1/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/1/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetails = () => {
  return (
    <>
   <Head>
    <title>Expert Front-End Development Services</title>
    <meta name="description" content="Discover cutting-edge front-end development services tailored to create fast, responsive, and user-friendly interfaces that drive user engagement and business growth." />
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
