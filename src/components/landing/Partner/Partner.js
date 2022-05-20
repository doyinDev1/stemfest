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
                <a href={partner.link} className={style.card} key={index}>
                  <img src={partner.image} alt="partner" />
                </a>
              );
            })}
          </div>
        </div>
        <div className={style.partnerCard}>
          <h2>Our Sponsors</h2>
          <div className={style.cards}>
            {sponsor.map(({ link, image }, index) => {
              return (
                <a href={image} className={style.card} key={index}>
                  <img src={image} alt="partner" />
                </a>
              );
            })}
          </div>
        </div>
        <div className={style.partnerCard}>
          <h2>Our Media Partners</h2>
          <div className={style.cards}>
            {media.map(({ image, link }, index) => {
              return (
                <a href={link} className={style.card} key={index}>
                  <img src={image} alt="partner" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
