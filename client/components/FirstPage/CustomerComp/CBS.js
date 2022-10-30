import React from "react";
import { Parallax, Background } from "react-parallax";

const CBS = () => {
  return (
    <div className="flex">
      <Parallax bgImage={"./marketing.jpeg"} strength={300}>
        <a target="_blank" href="https://groups.gsb.columbia.edu/MAC/rsvp_boot?id=30997">
          <div className="container1">
            <img src="/marketing.jpeg" alt="Mc" className="image1" />
            <div className="middle1">
              <div className="text1">Click Here</div>
            </div>
          </div>
        </a>
      </Parallax>
    </div>
  );
};
export default CBS;
