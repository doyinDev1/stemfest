import React from "react";

import "../../styles/Service.css";
import Details2 from "./Details2";
import ServiceOption from "./ServiceOption";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
function Services({ title, about, header }) {
  return (
    <div className="services lg:flex items-center py-8">
      <div className="services__Left flex-[0.45] px-6">
        <Details2 title={title} about={about} header={header} />
      </div>
      <div className="services__Right flex-[0.55] flex  md:flex-nowrap justify-center">
        <ServiceOption
          icon={<SportsCricketIcon />}
          title="Outdoor Games"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident nesciunt illo dignissimos perspiciatis perferendis culpa est nam tenetur quas?"
          link="/login"
          linkText="Explore"
        />
        <ServiceOption
          icon={<SportsBaseballIcon />}
          title="Outdoor Games"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident nesciunt illo dignissimos perspiciatis perferendis culpa est nam tenetur quas?"
          link="/login"
          linkText="Explore"
        />
        <ServiceOption
          icon={<BedroomBabyIcon />}
          title="Outdoor Games"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident nesciunt illo dignissimos perspiciatis perferendis culpa est nam tenetur quas?"
          link="/login"
          linkText="Explore"
        />
      </div>
    </div>
  );
}

export default Services;
