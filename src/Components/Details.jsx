import React from "react";
import copy from "copy-to-clipboard";
import Copy from "./Copy.jsx";

export default function Details() {
  const handleCopy = (e) => {
    console.log(e.target.innerHTML);
    copy(e.target.innerHTML);
  };

  return (
    <div className="col-10 pt-3 pl-3 pr-3">
      <div className="row">
        <div className="col-6">
          <h3><Copy value="Darren Kennedy"/></h3>
          <h5>Full Stack Software Developer</h5>
          <hr />
          <h6>Current Stack: </h6>
          <p>React. Node. MongoDB. Express</p>
        </div>
        <div className="col-6">
          <div>
            <span className="font-weight-bold mr-1">Email:</span>
            <Copy value="kennedy.dmb@gmail.com" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
