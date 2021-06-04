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
    <div className="col-12 order-1 col-lg-9 order-lg-2 border">
      <Row>
        <Image />
        <Details />
      </Row>
      <hr />
      <Row>
        <Summary />
      </Row>
      <hr />
      <Row>
        <Experience />
      </Row>
      <hr />
      <Row>
        <Education />
      </Row>
      <hr />
      <Row>
        <Site />
      </Row>
      <hr />
      <Row>
        <Interactive />
      </Row>
    </div>
  );
}
