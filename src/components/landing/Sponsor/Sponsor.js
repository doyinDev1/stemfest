import React from "react";
import style from "./Sponsor.module.css";

import spons1 from "../../../images/assets/spons1.png";
import spons2 from "../../../images/assets/spons2.png";
import spons3 from "../../../images/assets/spons3.png";
import spons4 from "../../../images/assets/spons4.png";
import spons5 from "../../../images/assets/spons5.png";
function Sponsor() {
  return (
    <div className={style.sponsor} id="sponsor">
      <h2>Our Sponsors</h2>
      <div className={style.cards}>
        <img src={spons1} alt="" />
        <img src={spons2} alt="" />
        <img src={spons3} alt="" />
        <img src={spons4} alt="" />
        <img src={spons5} alt="" />
      </div>
    </div>
  );
}

export default Sponsor;
