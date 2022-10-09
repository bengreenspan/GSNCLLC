import React from "react";
import { Parallax, Background } from "react-parallax";

const CBS = () => {
  return (
    <div className="flex">
      <Parallax bgImage={"./cbs.jpeg"} strength={600}>
        <a target="_blank" href="https://events.cretech.com/event/d6115969-afbc-4087-a102-33322bd7ef6b/websitePage:535c6eea-fe0f-4f83-b356-a57c21c713b4">
          <div className="container1">
            <img src="/cbs.jpeg" alt="Mc" className="image1" />
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
