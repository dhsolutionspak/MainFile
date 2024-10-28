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
        <title>Service Details</title>
        <meta name="description" content="Service Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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