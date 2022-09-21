import React from "react";
import { Parallax, Background } from "react-parallax";

const CBS = () => {
  return (
    <div className="flex">
      <Parallax bgImage={"./cbs.jpeg"} strength={600}>
        <a target="_blank" href="//https://home.gsb.columbia.edu/">
          <div className="container1">
            <img src="/cbs.jpeg" alt="Mc" className="image1" />
            <div className="middle1">
              <div className="text1">Columbia Business School</div>
            </div>
          </div>
        </a>
      </Parallax>
    </div>
  );
};
export default CBS;
