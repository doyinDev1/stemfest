import "../styles/About.css";
import Details from "./Details";
import img1 from "../images/assets/children.png";

function About({ title, about, header, linkText, link }) {
  return (
    <div
      id="about"
      className="about  md:flex items-center justify-center p-20 pr-0"
    >
      <div className="about__Left lg:pl-24 w-[100%]">
        <Details
          title={title}
          about={about}
          header={header}
          link={link}
          linkText={linkText}
        />
      </div>
      <div className="about__Right w-[100%] flex flex-col  ">
        <div className="about__Image">
          <img src={img1} alt="" className="neumorph max-w-[350px]" />
        </div>
        <div className="about__Image">
          <img src={img1} alt="" className="neumorph max-w-[350px]" />
        </div>
      </div>
    </div>
  );
}

export default About;
