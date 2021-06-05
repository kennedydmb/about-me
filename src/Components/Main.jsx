import React from "react";
import Row from "./Row";
import Image from "./Image.jsx";
import Details from "./Details.jsx";
import Summary from "./Summary.jsx";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Site from "./Site.jsx";
import Interactive from "./Interactive.jsx";

export default function Main() {
  return (
    <div className="col-12 order-1 col-lg-10 order-lg-2 border">
      <Row>
        <Image />
        <Details />
      </Row>
      <Row>
        <Summary />
      </Row>
      <Row>
        <Experience />
      </Row>
      <Row>
        <Education />
      </Row>
      <Row>
        <Site />
      </Row>
      <Row>
        <Interactive />
      </Row>
    </div>
  );
}
