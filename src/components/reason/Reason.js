import React from "react";
import style from "./Reason.module.css";
import artistImg from "../../images/assets/artist.png";
import Venue from "../landing/Venue/Venue";
function Reason() {
  return (
    <section id="reason">
    <div className={style.about} id="reason">
      <h2 className={style.title}> Why Attend</h2>
      <p className={style.summary}>
        This year, the STEAM Fun Fest is going physical, scheduled for Saturday
        23rd July 2022 at Landmark Center, Victoria Island, Lagos. Our theme,
        “STEAM From Classroom to the Real World”, will be exploring various
        aspects of STEAM including Robotics, Augmented Reality, Artificial
        Intelligence and the Internet of Things comprising four(4) key area:
      </p>

      <div className={style.body}>
        <div className={style.details}>
          <div>
            <h4 className={style.header}>STEAM EXHIBITION</h4>
            <p className={style.words}>
              Over 60 vendors providing interactive experiences in STEAM
              including science experience, robotics, AR/VR, IoT, 3D printing,
              Esports, and creative arts
            </p>
          </div>
          <div>
            <h4 className={style.header}>STEAM LAB</h4>
            <p className={style.words}>
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
            <h4 className={style.header}>STEAM Masterclass</h4>
            <p className={style.words}>
              Parents and their children will have an opportunity to attend
              specially designed seminars/master classes covering STEAM careers,
              education and technology trends.
            </p>
          </div>

          <div>
            <h4 className={style.header}>FUN ZONE</h4>
            <p className={style.words}>
              Children can play and win in the fun zone which will include
              digital games, games arcade, and lots more
            </p>
          </div>
        </div>
      </div>
      <Venue />
    </div>
    </section>
  );
}

export default Reason;
