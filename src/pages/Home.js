import "../styles/Home.css";

import About from "../components/landing/About";
import Agenda from "../components/landing/Agenda";
import Header from "../components/landing/Header";
import Services from "../components/landing/Services";
import Speakers from "../components/landing/Speakers";
import Navbar from "../components/landing/Navbar";
import Sponsors from "../components/landing/Sponsors";

import homeImg from "../images/assets/Supergirls.png";
import awsImg from "../images/assets/amazon.png";
const Home = () => {
  return (
    <div className="home">
      <div className="home__Top">
        <Navbar />
        <Header
          header="Welcome to our school"
          title="A brighter Future <h2 class='text-yellow'>for your kids</h2>"
          image={homeImg}
          about="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro corporis mollitia aliquid? Corrupti, laboriosam."
          link="/login"
          linkText="Enrol Now"
        />
        <About
          header="About our school"
          title="<h2 class='text-deep'>Guide The Young </h2> <h2 class='text-yellow'>Generation to Success</h2>"
          image={homeImg}
          about="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro corporis mollitia aliquid? Corrupti, laboriosam."
          link="/login"
          linkText="<a class='bg-yellow text-white p-4'>Subscribe Now</a>"
        />
        <Services
          title="We Provide The <h1 class='text-yellow text-[32px]'> Main Kids Activities </h1> "
          header="Why choose us"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro corporis mollitia aliquid? Corrupti, laboriosam."
        />
        <Speakers
          title="Our <span class='text-yellow'> Courses</span>"
          header="Playing is learning"
          about="
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, commodi alias adipisci dolores incidunt vel aut qui ab ipsa vitae ut delectus dolor obcaecati atque?"
        />
      </div>

      <div className="agendas">
        <Agenda
          date="1:45 PM - 2:15 PM"
          title="Grow Better: AN Overview of HubSpot's Marketing Hub"
          about="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, earum unde consequuntur eaque commodi minus hic! Expedita non consectetur dignissimos quisquam voluptatem enim voluptatum dolore fugit, laboriosam illo. Modi, maiores!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, earum unde consequuntur eaque commodi minus hic! Expedita non consectetur dignissimos quisquam voluptatem enim voluptatum dolore fugit, laboriosam illo. Modi, maiores!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, earum unde consequuntur eaque commodi minus hic! Expedita non consectetur dignissimos quisquam voluptatem enim voluptatum dolore fugit, laboriosam illo. Modi, maiores!"
          name="Christine Georghiou"
          job="Snr Prodduct Marketing Manager"
          work="Hubspot"
          role="Speaker"
          image={homeImg}
        />
        <Agenda
          date="1:45 PM - 2:15 PM"
          title="Grow Better: AN Overview of HubSpot's Marketing Hub"
          about="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, earum unde consequuntur eaque commodi minus hic! Expedita non consectetur dignissimos quisquam voluptatem enim voluptatum dolore fugit, laboriosam illo. Modi, maiores!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, earum unde consequuntur eaque commodi minus hic! Expedita non consectetur dignissimos quisquam voluptatem enim voluptatum dolore fugit, laboriosam illo. Modi, maiores!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, earum unde consequuntur eaque commodi minus hic! Expedita non consectetur dignissimos quisquam voluptatem enim voluptatum dolore fugit, laboriosam illo. Modi, maiores!"
          name="Christine Georghiou"
          job="Snr Prodduct Marketing Manager"
          work="Hubspot"
          role="Speaker"
          image={homeImg}
        />
        <Agenda
          date="1:45 PM - 2:15 PM"
          title="Grow Better: AN Overview of HubSpot's Marketing Hub"
          about="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, earum unde consequuntur eaque commodi minus hic! Expedita non consectetur dignissimos quisquam voluptatem enim voluptatum dolore fugit, laboriosam illo. Modi, maiores!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, earum unde consequuntur eaque commodi minus hic! Expedita non consectetur dignissimos quisquam voluptatem enim voluptatum dolore fugit, laboriosam illo. Modi, maiores!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, earum unde consequuntur eaque commodi minus hic! Expedita non consectetur dignissimos quisquam voluptatem enim voluptatum dolore fugit, laboriosam illo. Modi, maiores!"
          name="Christine Georghiou"
          job="Snr Prodduct Marketing Manager"
          work="Hubspot"
          role="Speaker"
          image={homeImg}
        />
      </div>
      <Sponsors
        title="2021 Sponsors"
        email="Please get in touch with growevents@gmail.com"
        images={[awsImg, awsImg, awsImg, awsImg, awsImg]}
      />
    </div>
  );
};

export default Home;
