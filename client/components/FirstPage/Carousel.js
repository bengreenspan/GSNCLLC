import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Parallax, Background } from "react-parallax";
import Carousel from "react-elastic-carousel";
import * as BS from "react-bootstrap";

const Carousely = () => {
  return (
    <Container sx={{ pb: 10 }}>
      <section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 10,
            pr: 5,
            pb: 10,
          }}
        >
          <div className="sticker">
            {" "}
            <Typography variant="h1" component="h1" sx={{ pb: 5 }}>
              <div className="fontbold">Client Testimonies</div>
            </Typography>
          </div>
        </Box>
      </section>

      <Container sx={{ mt: 4 }}>
        <Carousel
          itemsToShow={2}
          itemsToScroll={1}
          enableAutoPlay
          autoPlaySpeed={5000}
          focusOnSelect={true}
          infinite
        >
          <Box
            sx={{
              pr: 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >

            <h2 className="grayCard">
              <Typography sx={{ pl: 10, pr: 10, pt: 5, pb: 4 }}>
                <h2 className="grayCard">
                  “I couldn’t believe how fast and easy installation was with
                  these guys.”
                </h2>
                <br />
                <br />
                <h2 className="gray">-Julian V.</h2>
              </Typography>
            </h2>
          </Box>

          <Box
            sx={{
              pr: 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <h2>
              <Typography sx={{ pl: 5, pr: 10, pt: 3, pb: 4 }}>
                <h2>
                  “They service it once every few days, I do not think it has
                  even gotten close to malfunctioning or running empty.”
                </h2>
                <br />
                <br />
                <h2>-Shoon R.</h2>
              </Typography>
            </h2>
          </Box>
          <Box
            sx={{
              pr: 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <div className="grayCard">
              <Typography sx={{ pl: 5, pr: 10, pt: 5, pb: 4 }}>
                <h3 className="grayCard">
                  “GSNC supplies the paperwork monthly and are professional in
                  communicating”
                </h3>
                <br />
                <br />
                <h2 className="grayCard">-Conor W.</h2>
              </Typography>
            </div>
          </Box>

          <Box
            sx={{
              pr: 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <h2>
              <Typography sx={{ pl: 5, pr: 5, pt: 3, pb: 4 }}>
                <h2>
                  “Running an all cash business has never been easier. Plus I
                  get a cut of the action.”
                </h2>
                <br />
                <br />
                <h2>-Janet L.</h2>
              </Typography>
            </h2>
          </Box>
          <Box
            sx={{
              pr: 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <h2 className="grayCard">
              <Typography sx={{ pl: 10, pr: 10, pt: 5, pb: 4 }}>
                <h2 className="grayCard">"Kind, caring and punctual"</h2>
                <br />
                <br />
                <h2 className="grayCard">-Lee C.</h2>
              </Typography>
            </h2>
          </Box>

          <Box
            sx={{
              pr: 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <h2>
              <Typography sx={{ pl: 10, pr: 0, pt: 3, pb: 4 }}>
                <h2>“I have my business, and they take care of the rest”</h2>
                <br />
                <br />
                <h2>-Alex G.</h2>
              </Typography>
            </h2>
            
          </Box>
        </Carousel>
      </Container>
    </Container>
  );
};
export default Carousely;
