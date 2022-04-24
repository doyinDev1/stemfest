import React from "react";
import style from "./About.module.css";
function About({ title, about }) {
  return (
    <div className={style.about}>
      <h2>{title}</h2>
      <p>{about}</p>
    </div>
  );
}

export default About;
