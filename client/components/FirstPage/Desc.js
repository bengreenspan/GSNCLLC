import React, {useEffect} from "react";
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
    Aos.init({ })
    }, [])
  
  return (
    // <ThemeProvider theme={theme}>
      <Box sx={{ pl: 1 }}  data-aos="fade-right" data-aos-duration="2000">
        <Container className="aboutUs"  >
          <Divider sx={{ m: 0, p: 0 }} />
          <Box sx={{ pb: 9, pt: 9}}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography component="h3" variant="h3" sx={{ pb: 5 }}>
              <div className="font">
                About Us
                </div>
              </Typography>
        
            </Box>
            <Typography component="h4" variant="h4" sx={{ pb: 5 }}>
            <div className="font">
             What can GSNC LLC do for my small business?
             </div>
              </Typography>
              <Typography component="h4" variant="subtitle1" sx={{ pb: 5, pl:5, pr:5 }} >
                {" "}
                <div className="font">
             For small business is the NYC area GSNC can provide a full service ATM for your customers. Our industry experts can create bespoke ATM services for any small business. 
             </div>
              </Typography>
              <Typography component="h4" variant="h4" sx={{ pb: 5 }}>
              <div className="font">
       What will an ATM do for me?
       </div>
              </Typography>
              <Typography component="h4" variant="subtitle1" sx={{ pb: 5 }}>
                {" "}
                <div className="font">
             A flawlessly installed ATM can provide seamless customer convience for cash transactions as well as provide supplementary income to the business
             </div>
              </Typography>
            <Container
              sx={{ display: "flex", alignItems: "left", minWidth: "15" }}
            >
              {" "}
              <Typography component="h4" variant="subtitle1">
                {" "}
                <div className="font">
                ATM Managed Services Your Locations. Our Expertise. Simplify
                operations, reduce costs, get out of the ATM upgrade and
                compliance cycle. The ATM is not the focus of your business… but
                it is ours. GSNC operates more ATMs worldwide than anyone, and
                we take the burden of ATM operation, in whole or part, off your
                shoulders so your focus is on creating success for your
                business. Secure, high-quality ATM management and a better ATM
                experience from GSNC.
                </div>
              </Typography>
            </Container>
          </Box>
          <Box sx={{ pb: 2, pl: 2, display: "flex", alignItems: "center" }}>
            <Typography component="legend">
            <div className="font">
              <LockOutlinedIcon fontSize="small" /> Secure Five Star Service
              Providers <LockOutlinedIcon fontSize="small" />
              &nbsp; &nbsp; &nbsp;
              </div>
            </Typography>
            <Rating name="read-only" value={5} readOnly />
          </Box>
        </Container>
      </Box>
    // </ThemeProvider>
  );
};
export default Desc;
