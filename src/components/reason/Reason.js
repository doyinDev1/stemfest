import React from "react";
import style from "./Reason.module.css";
import artistImg from "../../images/assets/artist.png";
function Reason() {
  return (
    <div className={style.about}>
      <div className={style.flex}>
        <img src={artistImg} alt="" />
        <div className={style.content}>
          <h2> Why Attend</h2>
          <p>
            The STEAM Fun Fest is an opportunity for children to explore
            Science, Technology, Engineering, Arts and Math (STEAM) with the
            hope of inspiring future generations in Nigeria. In 2021, 9ijakids
            collaborating with STEAM METS and Edufun Technik Hub launched the
            first edition- A virtual STEAM Festival for children between the
            ages of 7 and 13. Following on from last year’s successful
            programme, this second edition, aims to spark children’s love for
            STEAM and also enlighten parents of opportunities in STEAM. The two
            day event programme will feature seasoned speakers, career talks,
            workshops, fun activities, games and interactive science learning
            opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reason;
