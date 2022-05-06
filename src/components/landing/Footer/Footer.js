import style from "./Footer.module.css";
import logo from "../../../images/assets/logo.png";
function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.cards}>
        <a href="/">
          <img src={logo} alt="" className={style.logo} />
        </a>
        <div className={style.links}>
          <ul>
            <li>
              <a href="/about">About Us</a>
              <a href="/reason"> Why Us</a>
              {/* <a href="#contact">Contact</a> */}
            </li>
          </ul>
        </div>
        <div className={style.links}>
          <ul>
            <li>
              <a href="https://facebook.com/9ijakids">Facebook</a>
              <a href="https://twitter.com/9ijakids">Twitter</a>
              <a href="https://instagram.com/9ijakids"> Instagram</a>
            </li>
          </ul>
        </div>

        <div className={style.news}>
          <a href="https://t.me/+B3jIp1KP4qE0MDk8" className={style.subscribe}>
            <h3>Subscribe to our newsletter</h3>
          </a>
        </div>

        <div className={style.address}>
          <p>41, Ladipo Labinjo Street Off</p>
          <p>Bode Thomas Street</p>
          <p>Surulere, Lagos</p>
          <p>08034021007</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
