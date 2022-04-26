import React from "react";
import style from "./Contact.module.css";
function Contact() {
  return (
    <div className={style.contact} id="contact">
      <div className={style.form}>
        <h2>Contact</h2>
        <p>
          If you have any questions, queries or inquires, feel free to contact
          us and we will be sure to get back to you as soon as possible
        </p>

        <form action="">
          <div className={style.flex}>
            {/* <img src={ } /> */}
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className={style.flex}>
            {/* <img src={ } /> */}
            <input type="email" placeholder="Email" required />
          </div>
          <div className={style.flex}>
            {/* <img src={ } /> */}
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write a Question"
            ></textarea>
            <div className={style.flex}>
              {/* <img src={ } /> */}
              <input type="submit" value="Send a message" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
