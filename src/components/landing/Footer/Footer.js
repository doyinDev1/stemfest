import style from "./Footer.module.css";
import logo from "../../../images/assets/logo.png";
function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.cards}>
        <img src={logo} alt="" className={style.logo} />
        <div className={style.links}>
          <ul>
            <li>
              <a href="#">About Us</a>
              <a href="">Contact</a>
              <a href=""> Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className={style.links}>
          <ul>
            <li>
              <a href="#">Facebook</a>
              <a href="">Twitter</a>
              <a href=""> Instagram</a>
            </li>
          </ul>
        </div>

        <div className={style.news}>
          <h3>Subscribe to our newsletter</h3>
          <form action="">
            <input type="email" placeholder="Email Address" />
            <input type="submit" value="Ok" />
          </form>
        </div>

        <div className={style.address}>41, ladipo Labinjo Street</div>
      </div>
    </div>
  );
}

export default Footer;
