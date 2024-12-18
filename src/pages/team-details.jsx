import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import TeamDetails1 from "@/components/team/TeamDetails1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const TeamDetails = ({ member }) => {
  return (
    <div>
      <Head>
        <title>Team Details - {member.name}</title>
        <meta name="description" content={`Learn more about ${member.name}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3">
          {/* Pass the member prop to TeamDetails1 */}
          <TeamDetails1 member={member} />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default TeamDetails;
