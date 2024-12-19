import Link from "next/link";
import Image from "next/image";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="team__slide">
      {/* Navigate to a dynamic route using team member ID */}
      <Link href={`/team-details/${member.id}`}>
        <Image
          priority
          src={member.image || "/assets/imgs/team/1.svg"}
          alt={member.name || "Team Member"}
          width={432}
          height={550}
        />
        <div className="team__info text-center">
          <h4 className="team__member-name-6">{member.name}</h4>
          <h5 className="team__member-role-6">{member.role}</h5>
        </div>
      </Link>
    </div>
  );
};

export default TeamMemberCard;
