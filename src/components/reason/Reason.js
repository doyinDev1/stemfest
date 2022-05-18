import React from "react";
import style from "./Reason.module.css";
import artistImg from "../../images/assets/artist.png";
import Venue from "../landing/Venue/Venue";
function Reason() {
  return (
    <div className={style.about}>
      <h2 className={style.title}> Why Attend</h2>
      <p className={style.summary}>
        This year, the STEAM Fun Fest is going physical, scheduled for Saturday
        23rd July 2022 at Landmark Center, Victoria Island, Lagos. Our theme,
        “STEAM From Classroom to the Real World”, will be exploring various
        aspects of STEAM including Robotics, Augmented Reality, Artificial
        Intelligence and the Internet of Things comprising four(4) key area:
      </p>

      <div className={style.flex}>
        <div className={style.details}>
          <div>
            <h4>STEAM EXHIBITION</h4>
            <p>
              Over 60 vendors providing interactive experiences in STEAM
              including science experience, robotics, AR/VR, IoT, 3D printing,
              Esports, and creative arts
            </p>
          </div>
          <div>
            <h4>STEAM LAB</h4>
            <p>
              This section involves a one-hour class where children have
              hands-on experience learning coding, robotics, design with Canva,
              animation, science experiments, etc
            </p>
          </div>
        </div>

        <div className={style.image}>
          <img src={artistImg} alt="" />
        </div>
        <div className={style.details}>
          <div>
            <h4>STEAM Masterclass</h4>
            <p>
              Parents and their children will have an opportunity to attend
              specially designed seminars/master classes covering STEAM careers,
              education and technology trends.
            </p>
          </div>
          <p></p>
          <div>
            <h4>FUN ZONE</h4>
            <p>
              Children can play and win in the fun zone which will include
              digital games, games arcade, and lots more
            </p>
          </div>
        </div>
      </div>
      <Venue />
    </div>
  );
}

export default Reason;
