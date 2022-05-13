import React, { useEffect } from "react";
import * as BS from "react-bootstrap";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Customers from "./Customers";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import { Divider } from "@mui/material";
import { Parallax, Background } from "react-parallax";
// import theme from "../../Theme";
import Title from "./Title";
import Aos from "Aos";
// import 'aos/dist/aos.css;'

const Desc = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <BS.Container>
      <Box
        sx={{
          pt: 50,
          pb: 15,
          display: "flex",
          justifyContent: "center",
          borderRadius: "15px",
        }}
      >
        <BS.Row>
          <BS.Col sm={5}>
            <div data-aos="fade-right" data-aos-duration="1000">
              <Parallax bgImage={"/hysoun1.png"} strength={-150}>
                <div className="transparent">
                  {" "}
                  <img src="/hysoun2.png" height={630} />
                </div>
              </Parallax>
            </div>
          </BS.Col>

          <BS.Col sm={7} xs={7}>
            <div data-aos="fade-left" data-aos-duration="1000">
              <Container sx={{ mt: 5, pl:21, justifyContent: "center" }}>
                <Box
                  // variant="h3"
                  // className="white-background"
                  sx={{ p: 3, justifyContent: "center" }}
                >
                  {" "}
                  <Typography>
                    <h1 className="fontbold">
                      What can GSNC LLC do for my small business?
                    </h1>
                    <br />
                    <br />
                    <div className="font">
                      A flawlessly installed ATM can provide seamless customer
                      convience for cash transactions as well as provide
                      supplementary income to the business
                    </div>
                    <br />
                    <div className="font">
                      {" "}
                      For a small business in the NYC area, GSNC can provide a
                      full service ATM for your customers. Our industry experts
                      can create custom ATM services for any small business.
                    </div>
                    <br />
                    <br />
                    <br />
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
  );
};
export default Desc;



// <BS.Col sm={5}>
// <div data-aos="fade-up" data-aos-duration="2000">
//   <Typography>
//     <Typography
//       variant="h3"
//       className="white-background"
//       sx={{
//         pt: 3,
//         pl: 3,
//         pr: 3,
//         pb: 3,
//         justifyContent: "center",
//       }}
//     >
//       <div className="fontbold">Bespoke ATM Solutions</div>

//       <br />
//       <h4 className="font">
//         {" "}
//         GSNC LLC is your local New York City ATM provider.
//         <br /> Helping small and medium size businesses install,
//         service and maintain the highest quality ATMs available.
//       </h4>
//     </Typography>
//   </Typography>
// </div>
// </BS.Col>