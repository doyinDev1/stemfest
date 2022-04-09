import React from "react";
import "../../styles/Speaker.css";
import Card from "./Card";
import Details2 from "./Details2";

import kidImage from "../../images/assets/children.png";

function Speakers({ header, title, about }) {
  return (
    <div id="speaker" className="speakers lg:flex p-6 py-[84px]">
      <div className="speakers__Left flex-[0.45]">
        <Details2 header={header} title={title} about={about} />
      </div>

      <div className="speakers__Right flex-[0.55] flex flex-wrap justify-evenly">
        <Card
          image={kidImage}
          about="
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, commodi aliasus dolor obcaecati atque?"
          title="<h4 class='bg-red rounded-full py-1'>Baby Kidoo</h4>"
          age="<h4 class='text-red'> Age 2 to 4 </h4>"
        />
        <Card
          image={kidImage}
          about="
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, commodi aliasus dolor obcaecati atque?"
          title="<h4 class='bg-yellow rounded-full py-1'>Baby Kidoo</h4>"
          age="<h4 class='text-yellow'> Age 2 to 4 </h4>"
        />
        <Card
          image={kidImage}
          about="
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, commodi aliasus dolor obcaecati atque?"
          title="<h4 class='bg-green rounded-full py-1'>Baby Kidoo</h4>"
          age="<h4 class='text-green'> Age 2 to 4 </h4>"
        />
      </div>
    </div>
  );
}

export default Speakers;
