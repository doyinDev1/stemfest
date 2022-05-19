import "../styles/Home.css";

import About from "../components/landing/About/About";
import Contact from "../components/landing/Contact/Contact";
import Footer from "../components/landing/Footer/Footer";
import Faq from "../components/landing/Faq/Faq";
import Header from "../components/landing/Header/Header";
import Steam from "../components/landing/Steam/Steam";
import Speakers from "../components/landing/Speakers/Speakers";
import Schedule from "../components/landing/Schedule/Schedule";
import Navbar from "../components/landing/Navbar/Navbar";
import Sponsor from "../components/landing/Sponsor/Sponsor";
import Partner from "../components/landing/Partner/Partner";
import Accordion from "../components/landing/Accordion/Accordion";
import Venue from "../components/landing/Venue/Venue";

import homeImg from "../images/assets/Supergirls.png";
import awsImg from "../images/assets/amazon.png";
import AboutPage from "../components/about/About";
import Reason from "../components/reason/Reason";

import { faq as faqData } from "../data/faq";

const Home = () => {
  return (
    <div className="home">
      <div className="home__Top">
        <Navbar />
        <Header
          title="Prepare your Kids for the future"
          about="
       It's never too early to introduce your kids to STEAM. This can help pique their curiosity about these areas as they grow older"
        />
        <div className="home__About">
          <AboutPage />
        </div>
        <About
          title="A day of fun and learning for the kids"
          about="
          STEAM learning is fun! This event promises to give children between 6- 13 years, a chance to explore, discover and learn about STEAM
          "
        />
        <Steam
          title="With STEAM the possibilities are endless "
          about="STEAM is an interdisciplinary approach to learning that integrates Science, Technology, Engineering, Arts and and Mathematics as access points for guiding student inquiry, dialogue, and critical thinking.
          "
        />
        <Reason />

        <Speakers
          title="Our <span class='text-yellow'> Courses</span>"
          header="Playing is learning"
          about="
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, commodi alias adipisci dolores incidunt vel aut qui ab ipsa vitae ut delectus dolor obcaecati atque?"
        />
        <Schedule />
        <Faq data={faqData} />
        {/* <Sponsor /> */}
        {/* <Contact /> */}
        <Partner />
        {/* <div className="home__Accordion">
          {faqData.map(({ summary, detail }, index) => (
            <Accordion detail={detail} summary={summary} />
          ))}
        </div> */}

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
