import React from "react";
import style from "./Venue.module.css";
import venueImage from "../../../images/assets/venue.png";
import dayIcon from "../../../images/assets/day.png";
import timeIcon from "../../../images/assets/time.png";
import locationIcon from "../../../images/assets/location.png";
function Venue() {
  return (
    <div className={style.venue}>
      <div className={style.dateImage}>
        <div className={style.date}>
          <div className={style.day}>
            <img src={dayIcon} alt="calendar" className={style.icon} />
            <p className={style.day_text}>Date</p>
          </div>
          <div className={style.day}>
            <img src={timeIcon} alt="calendar" className={style.icon} />
            <p className={style.day_text}>Time</p>
          </div>
          <div className={style.day}>
            <img src={locationIcon} alt="calendar" className={style.icon} />
            <div className={style.day_text}>
              <p>Location</p>
              <p className={style.location}>
                Landmark Center, Victoria Island, Lagos
              </p>
            </div>
          </div>
        </div>
        <div className={style.venue_image}>
          <img src={venueImage} alt="" />
        </div>
      </div>
      <div className={`${style.flex} ${style.others}`}>
        <div className={style.extra}>
          <p>7,500+</p>
          <p>Companies</p>
        </div>
        <div className={style.extra}>
          <p>20+</p>
          <p>Speakers</p>
        </div>
        <div className={style.extra}>
          <p>50+</p>
          <p>Exhibitors</p>
        </div>
        <div className={style.extra}>
          <p>5+</p>
          <p>Masterclass</p>
        </div>
      </div>
    </div>
  );
}

export default Venue;
