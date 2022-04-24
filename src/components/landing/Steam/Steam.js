import React from "react";
import style from "./Steam.module.css";
function Steam({ title, about }) {
  return (
    <div className={style.steam}>
      <h2>{title}</h2>
      <p>{about}</p>
    </div>
  );
}

export default Steam;
