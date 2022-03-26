import { Link } from "react-router-dom";
import "../styles/Header.css";

import arrowIcon from "../images/assets/arrow.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Header({ image, title, about, header, linkText, link }) {
  return (
    <div className="header md:min-h-[100vh] md:flex items-center justify-center p-20 pr-0">
      <div className="header__Left  w-[100%] pl-24">
        <h4 className="text-center max-w-fit md:text-left mb-10 bg-yellow px-8 py-3 rounded-full ">
          {header}
        </h4>
        <h1
          className="text-bold mb-6 lg:text-[76px] lg:leading-[80px]"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <p className="leading-10  lg:text-[22px]">{about}</p>
        <div className="header__Link relative mt-6">
          <Link to={link} className=" text-yellow bg-white p-4">
            {linkText}
          </Link>
          <div className="">
            <img src={arrowIcon} alt="" className="absolute top-0 " />
          </div>
        </div>
      </div>
      <div className="header__Right flex  items-center  w-[100%] justify-between">
        <img src={image} alt="" className="max-w-[560px] " />
        <div className="header__Social bg-yellow">
          <ul className="">
            <li className="">
              <a href="">
                <TwitterIcon />
              </a>
            </li>
            <li className="">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
