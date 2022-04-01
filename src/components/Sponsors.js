import React from "react";
import "../styles/Sponsors.css";
function Sponsors({ title, email, images }) {
  return (
    <div className="sponsors min-h-[40vh] flex flex-col items-center text-center">
      <h2 className="sponsor__Title font-bold text-xl my-4 lg:text-[30px]">
        {" "}
        {title}
      </h2>
      <div className="sponsors__Images flex justify-around flex-wrap mt-10 lg:max-w-[900px]">
        {images.map((image, index) => {
          return (
            <img
              src={image}
              alt=""
              key={index}
              className="sponsor__Image max-w-[200px] m-4"
            />
          );
        })}
      </div>

      <div className="sponsor__Contact my-5">
        <h2 className="font-extrabold">Contact Us</h2>
        <p className=""> {email}</p>
      </div>
    </div>
  );
}

export default Sponsors;
