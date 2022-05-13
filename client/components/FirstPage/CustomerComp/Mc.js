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

const Mc = () => {
  return (
    <div className="flex">
      <Parallax bgImage={"./mc1g.png"} strength={600}>
        <a target="_blank" href="https://mcsorleysoldalehouse.nyc/">
          <div className="container1">
            <img src="/mcg.png" alt="Mc" className="image1" />
            <div className="middle1">
              <div className="text1">McSorley's Ole Ale House</div>
            </div>
          </div>
        </a>
      </Parallax>
    </div>
  );
};
export default Mc;
