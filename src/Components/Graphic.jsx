import React from "react";
import kanyeGraphic from "../images/kanye_head.png";

const Graphic = () => {
  return (
    <div className="kanyeGraphicContainer">
      <img
        src={kanyeGraphic}
        className="kanyeGraphic"
        alt="Kanye West Portrait"
      ></img>
    </div>
  );
};

export default Graphic;
