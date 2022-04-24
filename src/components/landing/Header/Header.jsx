import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header({ title, about }) {
  return (
    <div className={style.header}>
      <h2>{title}</h2>
      <p>{about}</p>

      <div className={style.links}>
        <Link to="/">Individual Registration</Link>
        <Link to="/">School Registration</Link>
      </div>
    </div>
  );
}

export default Header;
