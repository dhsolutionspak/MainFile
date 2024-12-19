// pages/team-details/[id].jsx
import RootLayout from "@/components/common/layout/RootLayout";
import TeamCounter from "@/components/counter/TeamCounter";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import AboutTeam from "@/components/team/AboutTeam";
import TeamDetails1 from "@/components/team/TeamDetails1";
import teamData from "@/data/teamData";
import Head from "next/head";

export async function getStaticPaths() {
  const paths = teamData.map((member) => ({
    params: { id: member.id },
  }));
  return { paths, fallback: "blocking" }; // Use blocking fallback for missing data
}

export async function getStaticProps({ params }) {
  const member = teamData.find((m) => m.id === params.id);

  if (!member) {
    return { notFound: true }; // Return 404 if no matching member is found
  }

  return {
    props: { member },
  };
}

export default function TeamDetails({ member }) {
  return member ? (
    <>
      <div>
        <Head>
          <title>Team</title>
          <meta name="description" content="Team Description" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <RootLayout header="header3">
            <TeamDetails1 member={member} />
            <TeamCounter />

            <DigitalAgencyCTA />
          </RootLayout>
        </main>
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
}
