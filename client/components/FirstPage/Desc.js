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
// import theme from "../../Theme";
import Title from "./Title";
import Aos from "Aos";
// import 'aos/dist/aos.css;'

const Desc = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <Box
      sx={{
        pt: 34,
        pb: 15,
        display: "flex",
        justifyContent: "center",
        borderRadius: "15px",
      }}
    >
      <BS.Container>
        <Box>
          <BS.Row>
            <BS.Col>
              <img src="/hysoun.png" height={530} />
            </BS.Col>
            <BS.Col>
              <div className="orangeBack">
                <Typography sx={{ pb: 5 }}>
                  <div className="font">
                    What can GSNC LLC do for my small business?
                  </div>
                  <Box sx={{ pb: 9, pt: 9, display: "flex" }}>
                    <Typography component="h4" variant="subtitle1">
                      {" "}
                      <div className="font">
                      A flawlessly installed ATM can provide seamless customer
                      convience for cash transactions as well as provide
                      supplementary income to the business
                      </div>
                    </Typography>
                  </Box>
                </Typography>

                <Typography
                  component="h4"
                  variant="subtitle1"
                  sx={{ pb: 5, pl: 5, pr: 5 }}
                >
                                <div className="font">
                  {" "}
                  For small business is the NYC area GSNC can provide a full
                  service ATM for your customers. Our industry experts can
                  create bespoke ATM services for any small business.
                  </div>
                </Typography>
                
              </div>
            </BS.Col>
          </BS.Row>
        </Box>
      </BS.Container>
    </Box>
  );
};
export default Desc;

//       <Box
//         sx={{ display: "flex" }}
//         data-aos="fade-right"
//         data-aos-duration="2000"
//       >
//         <Container className="aboutUs">

//               </BS.Col>

//               <BS.Col>

//               </BS.Col>

//               {/* <Container
//                 sx={{ display: "flex", alignItems: "left", minWidth: "15" }}
//               > */}
//                 {" "}

//               {/* </Container> */}
//             </Box>
//             {/* <Box sx={{ pb: 2, pl: 2, display: "flex", alignItems: "center" }}> */}
//               <Typography component="legend">
//                 <div className="font">
//                   <LockOutlinedIcon fontSize="small" /> Secure Five Star Service
//                   Providers <LockOutlinedIcon fontSize="small" />
//                   &nbsp; &nbsp; &nbsp;
//                 </div>
//               </Typography>
//               <Rating name="read-only" value={5} readOnly />

//         </Container>

//       </Box>
//       </Box>
