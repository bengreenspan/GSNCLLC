import React from "react";

import { styled } from "@mui/material/styles";
import Customers from "./FirstPage/Customers";
import Desc from "./FirstPage/Desc";
import Map from "./FirstPage/Map";
import Faq from "./FirstPage/Faq";
import Form from "./FirstPage/Form";
import Contact from "./FirstPage/Contact";
import Title from "./FirstPage/Title";
import Carousel from "./FirstPage/Carousel";
import FirstContact from "./FirstPage/FirstContact";
import { Divider } from "@mui/material";
import { Parallax, Background } from "react-parallax";
import * as BS from "react-bootstrap";


<Divider sx={{ m: 0, p: 0 }} />;

export const Main = () => (
<div>
    <Title />
    <FirstContact />

    <Desc />
    <div className="gray">
    {/* <Parallax bgImage={"./new2.png"} strength={450}> */}
      <Form />
    </div>

    <Divider sx={{ m: 0, p: 0 }} />
    <Customers />

    <Divider sx={{ m: 0, p: 0 }} />
    <div className="gray">
    <Map />
    </div>

    <Carousel />
    <Divider sx={{ m: 0, pb: 0 }} />
    <div className="gray">
    <Faq />
    </div>
    <Contact />

{/* </Parallax> */}
</div>
);
