import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Divider,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import theme from "../theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Copyright() {
  return (
    <>
      {"© "}
      {/* <Link color="inherit" href="https://mui.com/"> */}
      GSNC {/* </Link>{' '} */}
      {new Date().getFullYear()}
    </>
  );
}

export const Footer = () => {
  return (
    <div className="white">
    <Box>
      <Typography
        component="footer"
        sx={{
          display: "flex",
        }}
      >
        <Container sx={{ mt: 7, mb: 7, display: "flex" }}>
          <Grid container spacing={5}>
            <Grid item xs={6} sm={4} md={3}>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                spacing={2}
                sx={{ height: 120 }}
              >
                <Grid item xs={6} sx={{ ml: 4 }}>
                  <Copyright />
                  <Box sx={{ mt: 2 }}>
                    <Box>154 Allen St </Box>
                    <Box>New York, New York 10002 </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Typography variant="h6" marked="left" gutterBottom>
                Navigate
              </Typography>
              <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
                <Box>
                  <a href="#"> Return to Top</a>
                </Box>

                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "mailto:no-reply@example.com";
                    e.preventDefault();
                  }}
                >
                  <Box>Contact Us</Box>
                </Link>
                <Link to={"/login"}>
                  <Box>Log In</Box>
                </Link>
              </Box>
            </Grid>
            <Box sx={{ pt: 2, pl: 3 }}>
              <img src="/logo3.png" height={120} />
            </Box>
            <Grid item>
              <Typography variant="caption">
                {" "}
                A Money Green Production
              </Typography>

              {/* })} */}
            </Grid>
          </Grid>
        </Container>
      </Typography>
    </Box>
    </div>
  );
};
export default Footer;
