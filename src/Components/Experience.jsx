import React from "react";
import Box from "./Box";

export default function Experience() {
  return (
    <div className="col-12">
      <h5>Work Experience</h5>
      <Box>
        <div>
          <span className="font-weight-bold">Nitro Solutions</span> |
          <span className="font-italic"> August 2020 - Present</span>
          <div>General Stuff I do here</div>
        </div>
        <div className="mt-2">
          <span className="font-weight-bold">Achievements:</span>
          <div>The best stuff I did in here</div>
        </div>
      </Box>
      <Box>
        <div>
          <span className="font-weight-bold">Domino's Pizza Group</span> |
          <span className="font-italic"> 2008 - 2020</span>
          <div>General Stuff I did here</div>
        </div>
        <div className="mt-2">
          <span className="font-weight-bold">Achievements:</span>
          <div>The best stuff I did in here</div>
        </div>
      </Box>
    </div>
  );
}
