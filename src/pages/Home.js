import React from "react";
import Hero from "../components/Hero";
// import abstract from "../abstract.jpg";


function Home() {
  return (
    <Hero>
      <div className="container mt-5 pt-5">
        <div className="row mt-5">
        <div className="col mt-5">
          <h1 className="display-2">I'm Dina Saunders</h1>
          <h3 className="lead">I'm a Maryland based Full Stack Developer. I design & build web applications</h3>
        </div>
        </div>
      </div>
    </Hero>
  );
}

export default Home;

// backgroundImage={ abstract }