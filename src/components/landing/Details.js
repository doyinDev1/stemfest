import "../../styles/Details.css";
import { Link } from "react-router-dom";

function Details({ title, about, header, linkText, link }) {
  return (
    <div className="details p-6 md:px-0 ">
      <h4 className="details__Header text-center max-w-fit bg-yellow px-8 py-3 rounded-full md:text-left mb-10 ">
        {header}
      </h4>
      <h1
        className="details__Title text-bold mb-6 text-white lg:text-[50px] lg:leading-[80px]"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
      <p className="details__About  leading-10 md:px-0 md:min-w-0 md:pr-4 lg:pr-0 lg:text-[22px]">
        {about}
      </p>
      <div className="details__Link header__Link relative mt-10">
        <Link
          to={link}
          className=" text-yellow font-bold bg-white p-4 px-16 text-xl"
          dangerouslySetInnerHTML={{ __html: linkText }}
        ></Link>
        {/* <div className="">
          <img
            src={arrowIcon}
            alt=""
            className="absolute top-0 hidden lg:block"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Details;
