import React from "react";
import style from "./Schedule.module.css";
function Schedule() {
  return (
    <div className={style.schedule}>
      <h2 className={style.header}> FunFest Schedule</h2>

      <h3 className={style.date}>SATURDAY, 30TH JULY</h3>
      <div className={style.flex}>
        <div className={style.left}>
          <ul>
            <li>
              {" "}
              <p className={style.time}>11am</p>
              <p>Event Starts</p>
            </li>
            <li>
              {" "}
              <p className={style.time}>11am</p>
              <p>Event Starts</p>
            </li>
            <li>
              {" "}
              <p className={style.time}>11am</p>
              <p>Event Starts</p>
            </li>
            <li>
              {" "}
              <p className={style.time}>11am</p>
              <p>Event Starts</p>
            </li>
            <li>
              {" "}
              <p className={style.time}>11am</p>
              <p>Event Starts</p>
            </li>
          </ul>
        </div>
        <div className={style.right}>
          <ul>
            <li>
              {" "}
              <p className={style.time}>11am</p>
              <p>Event Starts</p>
            </li>
            <li>
              {" "}
              <p className={style.time}>11am</p>
              <p>Event Starts</p>
            </li>
            <li>
              {" "}
              <p className={style.time}>11am</p>
              <p>Event Starts</p>
            </li>
            <li>
              {" "}
              <p className={style.time}>11am</p>
              <p>Event Starts</p>
            </li>
            <li>
              {" "}
              <p className={style.time}>11am</p>
              <p>Event Starts</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
