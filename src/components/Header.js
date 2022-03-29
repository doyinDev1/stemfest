import { Link } from "react-router-dom";
import "../styles/Header.css";

import arrowIcon from "../images/assets/arrow.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Details from "./Details";
function Header({ image, title, about, header, linkText, link }) {
  return (
    <div className="header  md:flex items-center justify-center md:p-20 md:pr-0 md:pb-0">
      <div className="header__Left  w-[100%] lg:pl-24">
        <Details
          title={title}
          about={about}
          header={header}
          link={link}
          linkText={linkText}
        />
      </div>
      <div className="header__Right md:flex  items-center  w-[100%] justify-between">
        <img src={image} alt="" className="md:max-w-[560px]  " />
        <div className="header__Social bg-yellow ">
          <ul className="text-white flex  justify-center md:block">
            <li className="m-4">
              <a href="">
                <TwitterIcon />
              </a>
            </li>
            <li className="m-4">
              <a href="">
                <FacebookIcon />
              </a>
            </li>
            <li className="m-4">
              <a href="">
                <YouTubeIcon />
              </a>
            </li>
            <li className="m-4">
              <a href="">
                <InstagramIcon />
              </a>
            </li>
            {/* <li className="">
              <a href="">
                <FacebookIcon />
              </a>
            </li>
            <li className="">
              <a href="">
                {" "}
                <InstagramIcon />{" "}
              </a>
            </li>
            <li className="">
              <a href="">
                <YouTubeIcon />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
