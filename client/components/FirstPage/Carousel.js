import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Parallax, Background } from "react-parallax";
import Carousel from "react-elastic-carousel";

const Carousely = () => {
  const carouselRef = useRef(null);
  let resetTimeout;
  return (
    <Container sx={{ pb: 10 }}>
      <Typography
        component={"span"}
        variant="h3"
        sx={{
          pt: 10,
          pl: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          // data-aos="fade-right"
          // data-aos-duration="1000"
          className="fontbold"
        >
          Client Testimonies
        </div>
        {/* </Typography> */}
      </Typography>

      <Container sx={{ mt: 4 }}>
        <div
        // data-aos="fade-left"
        //   data-aos-duration="1000"
        >
          <Carousel
            itemsToShow={1}
            itemsToScroll={1}
            enableAutoPlay
            autoPlaySpeed={5000}
            focusOnSelect={true}
            infinite
            ref={carouselRef}
            onNextEnd={({ index }) => {
              clearTimeout(resetTimeout);
              if (index + 1 === 6) {
                resetTimeout = setTimeout(() => {
                  carouselRef.current.goTo(0);
                }, 5000); // same time
              }
            }}
          >
            <Box
              sx={{
                pr: 5,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <h3>
                <Typography
                  component={"span"}
                  sx={{ pl: 10, pt: 3, pb: 3, pr: 8 }}
                >
                  <h3>
                    “I couldn’t believe how fast and easy installation was with
                    these guys.”
                  </h3>
                  <br />
                  <br />
                  <h3>-Julian V.</h3>
                </Typography>
              </h3>
            </Box>

            <Box
              sx={{
                pr: 5,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <h3>
                <Typography
                  component={"span"}
                  sx={{ pl: 10, pt: 3, pb: 3, pr: 3 }}
                >
                  <h3>
                    “They service it once every few days, I do not think it has
                    even gotten close to malfunctioning or running empty.”
                  </h3>
                  <br />
                  <br />
                  <h3>-Shoon R.</h3>
                </Typography>
              </h3>
            </Box>
            <Box
              sx={{
                pr: 5,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <div>
                <Typography
                  component={"span"}
                  sx={{ pl: 10, pt: 3, pb: 3, pr: 3 }}
                >
                  <h3>
                    “GSNC supplies the paperwork monthly and are professional in
                    communicating”
                  </h3>
                  <br />
                  <br />
                  <h3>-Conor W.</h3>
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
              <h3>
                <Typography
                  component={"span"}
                  sx={{ pl: 10, pt: 3, pb: 3, pr: 3 }}
                >
                  <h3>
                    “Running an all cash business has never been easier. Plus I
                    get a cut of the action.”
                  </h3>
                  <br />
                  <br />
                  <h3>-Janet L.</h3>
                </Typography>
              </h3>
            </Box>
            <Box
              sx={{
                pr: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <h3>
                <Typography
                  component={"span"}
                  sx={{ pl: 10, pt: 3, pb: 3, pr: 3 }}
                >
                  <h3>"Kind, caring and punctual"</h3>
                  <br />
                  <br />
                  <h3>-Lee C.</h3>
                </Typography>
              </h3>
            </Box>

            <Box
              sx={{
                pr: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <h3>
                <Typography
                  component={"span"}
                  sx={{ pl: 10, pt: 3, pb: 3, pr: 3 }}
                >
                  <h3>“I have my business, and they take care of the rest”</h3>
                  <br />
                  <br />
                  <h3>-Alex G.</h3>
                </Typography>
              </h3>
            </Box>
          </Carousel>
        </div>
      </Container>
    </Container>
  );
};
export default Carousely;
