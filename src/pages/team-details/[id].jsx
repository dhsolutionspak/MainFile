import { useRouter } from "next/router";
import teamData from "@/data/teamData";
import TeamDetails from "../team-details";

const TeamDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the team member based on the ID
  const member = teamData.find((item) => item.id.toString() === id);

  if (!member) {
    return <p>Loading...</p>; // Handle case when member is not found
  }

  // Pass the member data to TeamDetails
  return <TeamDetails member={member} />;
};

export default TeamDetailsPage;
