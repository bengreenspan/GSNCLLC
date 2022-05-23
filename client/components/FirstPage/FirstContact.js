import React, { useEffect } from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import aos from "aos";
// import 'aos/dist/aos.css;'

const FirstContact = () => {
  return (
    <div className="firstbutton ">
      <video className="video"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "40%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
        }}
      >
        {" "}
        <source src="/atmvideo1.mp4" type="video/mp4" />
      </video>
      <BS.Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "15px",
          }}
        >
          <BS.Row>
            <BS.Col sm={6}>
              <div
               data-aos="fade-up" data-aos-duration="2000"
               >
                <Typography >
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
                    <div className="fontbold">Bespoke ATM Solutions</div>

                    <br />
                    <h4 className="font">
                      {" "}
                      GSNC LLC is your local New York City ATM provider.
                      <br /> Helping small and medium size businesses install,
                      service and maintain the highest quality ATMs available.
                    </h4>
                    <Typography sx={{ pt: 4 }}>
                      <div
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="2000"
                      >
                        <Link to="/info" href="#">
                          <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Get Started</span>
                          </button>
                        </Link>
                      </div>
                    </Typography>
                  </Typography>
                </Typography>
              </div>
            </BS.Col>

            <BS.Col sm={7}>
              <div 
              // data-aos="fade-left" data-aos-duration="1000"
              >
                <Container sx={{ mt: 5, justifyContent: "center" }}>
                  <Box
                    variant="h3"
                    // className="white-background"
                    sx={{ p: 3, justifyContent: "center" }}
                  >
                    {" "}
                  </Box>
                </Container>
              </div>
            </BS.Col>
          </BS.Row>
        </Box>
      </BS.Container>
    </div>
  );
};

export default FirstContact;
