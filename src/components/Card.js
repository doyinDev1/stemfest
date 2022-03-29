import React from "react";
import "../styles/Card.css";
function Card({ image, title, about, age }) {
  return (
    <div className="card relative z-10 bg-white rounded-[40px] max-w-[250px] m-4">
      <img src={image} alt="" className="rounded-y[40px]" />
      <h4
        className="text-center  mx-3 -mt-4"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h4>
      <p className="p-3 pt-4 text-center h-[150px]">{about}</p>
      <h4
        className="text-center py-2"
        dangerouslySetInnerHTML={{ __html: age }}
      ></h4>
    </div>
  );
}

export default Card;
