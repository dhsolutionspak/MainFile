// components/team/Team1.jsx
import { useEffect, useRef } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import Link from "next/link";
import "swiper/css";
import "swiper/css/free-mode";
import animationCharCome from "@/lib/utils/animationCharCome";
import TeamMemberCard from "./TeamMemberCard";
import teamData from "@/data/teamData";

const Team1 = () => {
  const charAnim = useRef();

  useEffect(() => {
    animationCharCome(charAnim.current);

    // Mousemove effect
    const mousemoveHandler = (e) => {
      const teamCursor = document.getElementById("team_cursor");
      if (!teamCursor) return;

      const target = e.target;
      const timeline = gsap.timeline({
        defaults: { x: e.clientX, y: e.clientY },
      });

      if (target.closest(".team__slider")) {
        timeline.to(teamCursor, { opacity: 1, ease: "power4.out" });
      } else {
        timeline.to(teamCursor, { opacity: 0, ease: "power4.out" });
      }
    };

    if (typeof window !== "undefined") {
      document.addEventListener("mousemove", mousemoveHandler);
    }

    return () => {
      document.removeEventListener("mousemove", mousemoveHandler);
    };
  }, []);

  return (
    <>
      <section className="team__area-6">
        <div className="container line pt-120">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 offset-xxl-4 col-xl-8 offset-xl-4 col-lg-8 col-md-8">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  Talented team
                </h2>
                <p>
                  We’re a diverse team that works as fancies attention to
                  details, enjoys beers on Friday nights, and aspires to design
                  the dent in the universe.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="team__slider">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode
            loop
            speed={2000}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1000: { slidesPerView: 2, spaceBetween: 30 },
              1200: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {teamData.map((member) => (
              <SwiperSlide key={member.id}>
                <TeamMemberCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="container line pt-150">
          <div className="line-3"></div>
        </div>

        <div className="team__join-btn">
          <div className="btn_wrapper">
            <Link href="/contact" className="wc-btn-primary btn-item btn-hover">
              <span></span> Join our <br />
              talented team
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team1;
