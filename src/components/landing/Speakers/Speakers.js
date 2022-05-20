import React from "react";
import style from "./Speakers.module.css";

import avatar1 from "../../../images/assets/avatar1.png";
import girl from "../../../images/assets/girl.png";
import pink from "../../../images/assets/pink-guy.png";
import thin from "../../../images/assets/thin-girl.png";
import sil from "../../../images/assets/sil2.png";
import { speaker } from "../../../data/speaker.js";
function Speakers() {
  return (
    <div className={style.speakers}>
      <h2>Our Speakers</h2>
      <div className={style.cards}>
        {speaker.map(({ image, name }, index) => (
          <div className={style.card}>
            <img src={image} alt="avatar" />
            <p> {name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;
