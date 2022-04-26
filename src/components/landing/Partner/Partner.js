import React from "react";
import style from "./Partner.module.css";
import naijaIcon from "../../../images/assets/9ijakids.png";
import edufunIcon from "../../../images/assets/edufun.png";
import stemIcon from "../../../images/assets/stem.png";
function Partner() {
  return (
    <div className={style.partner}>
      <h2>Our Partners</h2>
      <div className={style.cards}>
        <img src={naijaIcon} alt="" />
        <img src={edufunIcon} alt="" />
        <img src={stemIcon} alt="" />
      </div>
    </div>
  );
}

export default Partner;
