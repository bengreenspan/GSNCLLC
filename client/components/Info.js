import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Form from "./FirstPage/Form";
import { Link } from "react-router-dom";
// import Aos from "aos";
import * as BS from "react-bootstrap";

const ContactUs = () => {
  // useEffect(() => {
  //   Aos.init({});
  // }, []);

  return (
    <BS.Container>
      <Container sx={{ pt: 10, pb: 20 }}>
        <Box sx={{ pt: 10, pb: 15, display: "flex", justifyContent: "center" }}>
          <Typography component="h1" variant="h2">
            <div
              className="fontbold"
              // data-aos="fade-right"
              // data-aos-duration="1000"
            >
              Reach Out
            </div>
          </Typography>
        </Box>
        <div className="gray">
          <div className="border123">
            <Form />
          </div>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br />
        <Box      sx={{
              pt: 3,
              pl: 3,
              pr: 3,
              pb: 3,
              // justifyContent: "center",
              display: "flex", justifyContent: "center" 
            }}
            >
          <Typography
            variant="h3"
            className="white-background"
            sx={{
              pt: 3,
              pl: 3,
              pr: 3,
              pb: 3,
              justifyContent: "center",
            }}
          >
            <div className="fontbold">
              {" "}
              Contact us by email at:
              <br />
              <Typography>
                <h4>GSNC@GSNCLLC.com</h4>
              </Typography>
            </div>
          </Typography>
        </Box>
       
      </Container>
    </BS.Container>
  );
};

export default ContactUs;
