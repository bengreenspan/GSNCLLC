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

const Za = () => {
  return (
    <div className="flex">
      <Parallax bgImage={"./za.png"} strength={600}>
        <a target="_blank" href="https://grannyza.com/">
          <div className="container2">
            <img src="/za.png" alt="Zs" className="image2" />
            <div className="middle2">
              <div className="text2">Granny Za's Cannabis</div>
            </div>
          </div>
        </a>
      </Parallax>
    </div>
  );
};
export default Za;
