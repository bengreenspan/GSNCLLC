import React from "react";

import { styled } from "@mui/material/styles";
import Customers from "./FirstPage/Customers";
import Desc from "./FirstPage/Desc";
import Map from "./FirstPage/Map";
import Faq from "./FirstPage/Faq";
import Form from "./FirstPage/Form";
import Contact from "./FirstPage/Contact";
import Title from "./FirstPage/Title";
import FirstContact from "./FirstPage/FirstContact";
import { Divider } from "@mui/material";
import { Parallax, Background } from 'react-parallax';

<Divider sx={{ m: 0, p: 0 }} />;

export const Main = () => (
  <div>
    <Title />
    {/* <Parallax bgImage={'./back7.png'} strength={600}> */}
    <FirstContact />
    <Divider sx={{ m: 0, p: 0 }} />

    <Desc />
    <Divider sx={{ m: 0, p: 0 }} />
    {/* </Parallax> */}
    <Form />
    <Divider sx={{ m: 0, p: 0 }} />
    <Customers />
    <Divider sx={{ m: 0, p: 0 }} />
    <Map />
    {/* <Parallax bgImage={'./back7.png'} strength={400}> */}
    <Divider sx={{ m: 0, p: 0 }} />
    <Faq />
    <Contact />
    {/* </Parallax> */}

  </div>
);
