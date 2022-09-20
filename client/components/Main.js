import React from "react";
import Customers from "./FirstPage/Feature";
import Desc from "./FirstPage/Desc";
import Map from "./FirstPage/Map";
import Faq from "./FirstPage/Faq";
import Form from "./FirstPage/Form";
import Contact from "./FirstPage/Contact";
import Title from "./FirstPage/Title";
import Carousel from "./FirstPage/Carousel";
import FirstContact from "./FirstPage/FirstContact";
import { Divider } from "@mui/material";



<Divider sx={{ m: 0, p: 0 }} />;

export const Main = () => (
  <div>
    <Title />
    <FirstContact />
    {/* <Desc /> */}
    <Customers />
    <div className="gray">
      <Form />
    </div>

    {/* <Divider sx={{ m: 0, p: 0 }} /> */}
 
    {/* <Divider sx={{ m: 0, p: 0 }} /> */}
    <div className="gray">
      {/* <Map /> */}
    </div>
    {/* <Carousel /> */}
    {/* <Divider sx={{ m: 0, pb: 0 }} /> */}
    {/* <div className="gray">  */}
      <Faq />
    {/* </div> */}
    <Contact />
  </div>
);
