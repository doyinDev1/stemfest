import React from "react";
import style from "./Partner.module.css";
import naijaIcon from "../../../images/assets/9ijakids.png";
import edufunIcon from "../../../images/assets/edufun.png";
import stemIcon from "../../../images/assets/stem.png";
import sabiIcon from "../../../images/assets/sabiteach.png";
import { partner, sponsor, media } from "../../../data/partner.js";
function Partner() {
  return (
    <section id="sponsors">


    
    <div className={style.partner}>
      <div className={style.partnerCard}>
        <h2 className={style.header}>Our Partners</h2>
        <div className={style.cards}>
          {partner.map((partner, index) => {
            return (
              <div className={style.card} key={index}>
                <img src={partner} alt="partner" />
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.partnerCard}>
        <h2>Our Sponsors</h2>
        <div className={style.cards}>
          {sponsor.map((sponsor, index) => {
            return (
              <div className={style.card} key={index}>
                <img src={sponsor} alt="partner" />
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.partnerCard}>
        <h2>Our Media Partner</h2>
        <div className={style.cards}>
          {media.map((media, index) => {
            return (
              <div className={style.card} key={index}>
                <img src={media} alt="partner" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Partner;
