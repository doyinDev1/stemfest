import React from "react";
import style from "./Speakers.module.css";

import avatar1 from "../../../images/assets/avatar1.png";
function Speakers() {
  return (
    <div className={style.speakers}>
      <h2>Our Speakers</h2>
      <div className={style.cards}>
        <div className={style.card}>
          <img src={avatar1} alt="avatar" />
          <p> Lorem ipsum</p>
        </div>
        <div className={style.card}>
          <img src={avatar1} alt="avatar" />
          <p> Lorem ipsum</p>
        </div>
        <div className={style.card}>
          <img src={avatar1} alt="avatar" />
          <p> Lorem ipsum</p>
        </div>
        <div className={style.card}>
          <img src={avatar1} alt="avatar" />
          <p> Lorem ipsum</p>
        </div>
        <div className={style.card}>
          <img src={avatar1} alt="avatar" />
          <p> Lorem ipsum</p>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
