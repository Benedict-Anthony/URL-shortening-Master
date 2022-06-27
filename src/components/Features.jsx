import React from "react";
import Heading from "./shared/Heading";
import Card from "./shared/Card";
import "../UI/features.css";

import brand from "../images/brand.svg";
import records from "../images/records.svg";
import customizable from "../images/customizable.svg";

function Features() {
  return (
    <div className="features">
      <div className="container">
        <Heading>
          <h1>Advanced Statistics </h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </Heading>

        <div className="features__lists">
          <Card>
            <div className="card__img">
              <img src={brand} alt="" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </Card>

          <Card>
            <div className="card__img">
              <img src={records} alt="" />
            </div>
            <h3> Detailed Record</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions
            </p>
          </Card>

          <Card>
            <div className="card__img">
              <img src={customizable} alt="" />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Features;
