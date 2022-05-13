import React, { useEffect } from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Customers from "./Customers";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import { Divider } from "@mui/material";
import { Parallax, Background } from "react-parallax";
// import theme from "../../Theme";
import Title from "./Title";
import Aos from "Aos";
// import 'aos/dist/aos.css;'

const FirstContact = () => {
  return (
    <div>
      <video
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
            <BS.Col sm={5}>
              <div data-aos="fade-up" data-aos-duration="2000">
                <Typography>
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
                  </Typography>
                </Typography>
              </div>
            </BS.Col>

            <BS.Col sm={7}>
              <div data-aos="fade-left" data-aos-duration="1000">
                <Container sx={{ mt: 5, justifyContent: "center" }}>
                  <Box
                    variant="h3"
                    // className="white-background"
                    sx={{ p: 3, justifyContent: "center" }}
                  >
                    {" "}
                    <Typography>
                      <button>
                        <span>Click Here to Start</span>
                      </button>
                    </Typography>
                  </Box>
                </Container>
              </div>
            </BS.Col>
          </BS.Row>
        </Box>
      </BS.Container>
    </div>

    // <Box
    //   sx={{
    //     display: "flex",
    //     justifyContent: "center",
    //     borderRadius: "15px",
    //   }}
    // >

    //   <BS.Container md={7}>
    //     <BS.Row>
    //       <Box
    //         sx={{ display: "flex" }}

    //       >
    //         <BS.Col>
    //           <Box sx={{ display: "flex", justifyContent: "left" }}>

    //           </Box>
    //         </BS.Col>
    //         <BS.Col md={1}></BS.Col>
    //         <BS.Col md={4}>
    //           {" "}
    //           <Container sx={{ p: 3, alignItems: "center" }} >
    //           <br />
    //           <br />
    //           <br />
    //           <br />
    //           <br />
    //           <br />
    //           <br />

    //           </Container>
    //         </BS.Col>

    //         {/* </Box> */}
    //       </Box>
    //     </BS.Row>
    //   </BS.Container>
    // </Box>
  );
};

export default FirstContact;
