import React from "react";
import { Parallax, Background } from "react-parallax";

const CBS = () => {
  return (
    <div className="flex">
      <Parallax bgImage={"./africa.png"} strength={600}>
        <a target="_blank" href="https://groups.gsb.columbia.edu/abc/rsvp_boot?id=30258">
          <div className="container1">
            <img src="/africa.png" alt="Mc" className="image1" />
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
