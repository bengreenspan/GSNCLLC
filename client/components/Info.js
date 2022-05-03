import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import { Divider } from "@mui/material";
import Form from "./FirstPage/Form";
import { Link } from "react-router-dom";
import Aos from "aos";
// import "aos/dist/aos.css";

const ContactUs = () => {

  useEffect(() => {
    Aos.init({ })
    }, [])
  

    return (
        <Container>
          {/* <ThemeProvider theme={theme}> */}
            <Box sx={{ pl: 1 }}>
              <Box sx={{ pt: 4, pb: 3, display: "flex", justifyContent: "center" }}>
                <Typography component="h1" variant="h2">
             Contact Us
                </Typography>
                
              </Box>
              <Divider sx={{ m: 0, p: 0 }} />
              <Typography component="h4" variant="h4">
If you are interesting in becoming a client or would like to discuss a potential partnership please email us at <Link
  to="#"
  onClick={(e) => {
    window.location.href = "mailto:no-reply@example.com";
    e.preventDefault();
  }}
>
  GSNC@GSNC.edu
</Link>
                </Typography>
              <Box sx={{ pb: 4, pl: 2, pt: 3 }}>
                <Typography component="h4" variant="subtitle1">
                  {" "}
               Or fill out the form  below.
                </Typography>
              </Box>
            </Box>
        <Form/>
        </Container>
      );
}

export default ContactUs