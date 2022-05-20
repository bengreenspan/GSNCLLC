import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Form from "./FirstPage/Form";
import { Link } from "react-router-dom";
// import Aos from "aos";
import * as BS from "react-bootstrap";

const NotFound = () => {
  // useEffect(() => {
  //   Aos.init({});
  // }, []);

  return (
    <div className="atmback">
      <BS.Container>
        <BS.Col>
          <Container sx={{ mt: 25, pl: 0, justifyContent: "center" }}>
            <Typography component="h1" variant="h2" sx={{ pt: 10 }}>
              <div
                className="borderRad2"
                // data-aos="slide-left"
                // data-aos-duration="1000"
              >
                Page Not Found!
              </div>
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              sx={{ pl: 0, pr: 0, mt: 10, pb: 0 }}
            >
              <div
                // data-aos="slide-right"
                // data-aos-duration="1000"
                className="borderRad2"
              >
                To get back to a working page
              </div>
            </Typography>
            <Typography
              component="h1"
              variant="h1"
              sx={{ pl: 0, pr: 0, mt: 10, pb: 0 }}
            >
              {" "}
              <Link to="/"  style={{ textDecoration: "none" }}>
                <div
                  // className="borderRad2"
                  className="borderRad2"
                  // data-aos="slide-left"
                  // data-aos-duration="1000"
                >
                  Click Here
                </div>
              </Link>
            </Typography>{" "}
            <Typography sx={{ pl: 0, pr: 0, mt: 10, pb:10 }}>
              <div
                // data-aos="slide-right"
                // data-aos-duration="1000"
                // className="borderRad2"
              >
                <img src="/NotFound.png" alt="Mc" />
              </div>
            </Typography>
          </Container>
        </BS.Col>
      </BS.Container>
    </div>
  );
};

export default NotFound;
