import React from "react";
import style from "./About.module.css";
import aboutImg from "../../images/assets/about-img.png";
function About() {
  return (
    <div className={style.about} id="about-page">
      <div className={style.flex}>
        <img src={aboutImg} alt="" />
        <div className={style.content}>
          <h2> About Us</h2>
          <p>
            The STEAM Fun Fest is an opportunity for children to explore
            Science, Technology, Engineering, Arts and Math (STEAM) with the
            hope of inspiring future generations in Nigeria.
          </p>
          <p>
            In 2021, 9ijakids collaborating with STEAM METS and Edufun Technik
            Hub launched the first edition- A virtual STEAM Festival for
            children between the ages of 7 and 13.
          </p>
          <p>
            Following on from last year’s successful programme, this second
            edition with the theme. “STEAM: From Classroom to the Real World”
            aims to spark children’s love for STEAM and enlighten parents about
            opportunities in STEAM. The one-day event programme will feature
            seasoned speakers, career talks, workshops, fun activities, games,
            and interactive science learning opportunities.
          </p>
          <p>
            The one-day event programme will feature seasoned speakers, career
            talks, workshops, fun activities, games, and interactive science
            learning opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
