import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="jumbotron text-center bg-img cover">
      {props.children}
    </div>
  );
}

export default Hero;

// style={{ backgroundImage: `url(${props.backgroundImage})` }}