import React from "react";
import style from "./Faq.module.css";
import { faq } from "../../../data/faq.js";
function Faq() {
  return (
    <div className={style.faq}>
      <h2 className={style.title}>FAQs</h2>

      <div className={style.cards}>
        {faq.map(({ detail, summary }, index) => (
          <div className={style.card} key={index}>
            <h4 className={style.header}>{summary}</h4>

            <p
              className={style.about}
              dangerouslySetInnerHTML={{ __html: detail }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
