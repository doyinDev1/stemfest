import React from "react";
import style from "./Schedule.module.css";
import { scheduleLeft, scheduleRight } from "../../../data/schedule.js";
function Schedule() {
  return (
    <div className={style.schedule}>
      <h2 className={style.header}> FunFest Schedule</h2>

      <h3 className={style.date}>SATURDAY, 23RD JULY</h3>
      <div className={style.flex}>
        <div className={style.left}>
          <ul className={style.lists}>
            <li className={style.box}>
              <h4 className={style.class}> MASTERCLASS</h4>
            </li>
            {scheduleLeft.map(({ time, event }, index) => (
              <li>
                <p className={style.time}>{time}</p>
                <p className={style.event}>{event}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.right}>
          <ul className={style.lists}>
            <li className={style.box}>
              <h4 className={style.class}>STEAM LAB</h4>
            </li>
            {scheduleRight.map(({ time, event }, index) => (
              <li>
                <p className={style.time}>{time}</p>
                <p className={style.event}>{event}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
