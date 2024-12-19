import { useEffect, useRef } from "react";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const TeamDetails1 = ({ member }) => {
  const charAnim = useRef();
  const charAnim2 = useRef();

  useEffect(() => {
    animationCharCome(charAnim.current);
    animationCharCome(charAnim2.current);
  }, []);

  return (
    <section className="team__detail">
      <div className="container line pb-140">
        <div className="line-3"></div>
        <div className="row">
          {/* Team Member Image */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 offset-lg-0 offset-md-2">
            <div className="team__member-img">
              <Image
                priority
                src={member.image || "/assets/imgs/team/1.svg"}
                alt={`${member.name} Picture` || "Team Member Picture"}
                data-speed="0.5"
                width={100}
                height={100}
              />
            </div>
          </div>
          {/* Team Member Details */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="sec-title-wrapper pt-120">
              <h2
                className="team__member-name-7 animation__char_come"
                ref={charAnim}
              >
                {member.name}
              </h2>
              <h3
                className="team__member-role-7 animation__char_come"
                ref={charAnim2}
              >
                {member.role}, <span>{member.company}</span>
              </h3>
            </div>

            {/* Render Bio Sections */}
            <div className="team__member-bio">
              {member.bio.map((section, index) => (
                <div key={index} className="bio-section">
                  <h4 className="bio-heading">{section.heading}</h4>
                  <p className="bio-content">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="team__member-social">
              <h4 className="work-title">Follow :</h4>
              <ul>
                {member.socials.map((social, index) => (
                  <li key={index}>
                    <a href={social.link} target="_blank" rel="noreferrer">
                      <span>
                        <i className={`fa-brands fa-${social.icon}`}></i>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetails1;
