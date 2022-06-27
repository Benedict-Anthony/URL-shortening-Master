import React from "react";
import Button from "./shared/Button";
import "../UI/landing.css";

function Landing() {
  return (
    <div className="container">
      <div className="landing">
        <div className="landing__text">
          <h1>
            More than just <br /> shorter links
          </h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button text={"Get Started "} />
        </div>
        <div className="landing__img"></div>
      </div>
    </div>
  );
}

export default Landing;
