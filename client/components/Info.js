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
      <Container sx={{ pt: 10 }}>
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
          <BS.Row>
            <BS.Col sm={7}></BS.Col>
            <BS.Col>
              <Typography sx={{ pl: 5, pr: 3, mt: 5, pb: 10 }}>
                <h1 className="font">
                  <div
                    className="borderRad2"
                    // data-aos="zoom-in"
                    // data-aos-duration="1000"
                  >
                    Contact Us by email at: GSNCLLC@EDdfdU.com
                  </div>
                </h1>
                
              </Typography>
            </BS.Col>
          </BS.Row>
      
      </Container>
    </BS.Container>
  );
};

export default ContactUs;
