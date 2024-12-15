import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/3/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/3/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/3/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/3/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetails = () => {
  return (
    <>
      <Head>
    <title>Expert Mobile App Development Services</title>
    <meta name="description" content="Transform your business with innovative mobile app development services, delivering high-performance, user-friendly, and custom mobile solutions for Android and iOS platforms." />
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
