import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Aos from "Aos";
// import "aos/dist/aos.css"
import { Parallax, Background } from "react-parallax";

const Customers = () => {
  return (
    <div className="customers">
      <Parallax bgImage={"./back2.png"} strength={600} >
        <Container>
          <Box sx={{ display: "flex", justifyContent: "center", pb: 12 }}>
            <Typography variant="h4" marginTop={13} sx={{ color: "white" }}>
              <div className="font">

              <Typography
                    variant="h3"
                    className="white-background"
                    sx={{ p: 3, justifyContent: "center" }}
                  >
                  Sample Customers
                  </Typography>
              </div>
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ pb: 12 }}>
            <Parallax bgImage={"./mc1g.png"} strength={600} >
              <a target="_blank" href="https://mcsorleysoldalehouse.nyc/">
                <div className="container">
                  <img src="/mcg.png" alt="Mc" className="image" />
                  <div className="middle">
                    <div className="text">McSorley's Ole Ale House</div>
                  </div>
                </div>
              </a>
              </Parallax>
            </Box>
            <Box>
            <Parallax bgImage={"./za.png"} strength={600} >
              <a target="_blank" href="https://grannyza.com/">
                <div className="container">
                  <img src="/za.png" alt="Zs" className="image" />
                  <div className="middle">
                    <div className="text">Granny Za's Cannabis</div>
                  </div>
                </div>
              </a>
              </Parallax>
            </Box>
          </Box>
        </Container>
      </Parallax>
    </div>
  );
};
export default Customers;
