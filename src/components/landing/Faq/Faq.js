import React from "react";
import style from "./Faq.module.css";
function Faq() {
  return (
    <div className={style.faq}>
      <h2 className={style.title}>FAQs</h2>

      <div className={style.cards}>
        {[...Array(6)].map((i) => (
          <div className={style.card}>
            <h4 className={style.header}>What is Steam</h4>

            <p className={style.about}>
              STEAM is an interdisciplinary approach to learning that integrates
              Science, Technology, Engineering, Arts and Mathematics to help
              students have a broader view of real world application of
              knowledge,solve problems and innovate.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
