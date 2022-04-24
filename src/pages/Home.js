import "../styles/Home.css";

import About from "../components/landing/About/About";
import Contact from "../components/landing/Contact/Contact";
import Footer from "../components/landing/Footer/Footer";
import Header from "../components/landing/Header/Header";
import Steam from "../components/landing/Steam/Steam";
import Speakers from "../components/landing/Speakers/Speakers";
import Schedule from "../components/landing/Schedule/Schedule";
import Navbar from "../components/landing/Navbar/Navbar";
import Sponsors from "../components/landing/Sponsors";

import homeImg from "../images/assets/Supergirls.png";
import awsImg from "../images/assets/amazon.png";
const Home = () => {
  return (
    <div className="home">
      <div className="home__Top">
        <Navbar />
        <Header
          title="Prepare your Kids for the future"
          about="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro corporis mollitia aliquid? Corrupti, laboriosam."
        />
        <About
          title="Guide The Young Generation to Success"
          about="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro corporis mollitia aliquid? Corrupti, laboriosam."
        />
        <Steam
          title="We Provide The Main Kids Activities "
          header="Why choose us"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro corporis mollitia aliquid? Corrupti, laboriosam."
        />
        <Speakers
          title="Our <span class='text-yellow'> Courses</span>"
          header="Playing is learning"
          about="
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, commodi alias adipisci dolores incidunt vel aut qui ab ipsa vitae ut delectus dolor obcaecati atque?"
        />
        <Schedule />

        <Contact />
        <Footer />
      </div>

      {/* <Sponsors
        title="2021 Sponsors"
        email="Please get in touch with growevents@gmail.com"
        images={[awsImg, awsImg, awsImg, awsImg, awsImg]}
      /> */}
    </div>
  );
};

export default Home;
