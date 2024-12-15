import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/5/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/5/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/5/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/5/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetails = () => {
  return (
    <>
<Head>
    <title>Comprehensive Cybersecurity Solutions</title>
    <meta name="description" content="Protect your business with comprehensive cybersecurity solutions designed to safeguard your digital assets, mitigate risks, and ensure compliance through proactive threat detection and response." />
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
