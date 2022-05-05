import * as React from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


const FirstContact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        borderRadius: "15px",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
        }}
      >
        {" "}
        <source src="/atmvideo1.mp4" type="video/mp4" />
      </video>
      <BS.Container>
        <BS.Row>
          <Box
            sx={{ display: "flex" }}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            {/* <ThemeProvider theme={theme}> */}

            {/* <Box> */}
            <BS.Col>
              <Box sx={{ display: "flex", justifyContent: "left" }}>

                  <Typography sx={{ color: "black" }}>
                    <Typography
                      variant="h3"
                      className="white-background"
                      sx={{ p: 3, justifyContent: "center" }}
                    >
                      <div className="font">
                      Bespoke ATM Solutions
                      </div>
                      <br />
                      <br />
                      <h3>
                        {" "}
                        GSNC LLC is your local New York City ATM provider.
                        <br /> Helping small and medium size businesses install,
                        service and maintain the highest quality ATMs available.
                      </h3>
                      <br />
                    </Typography>
                  </Typography>
            
              </Box>
            </BS.Col>
            <BS.Col></BS.Col>
            <BS.Col>
              {" "}
              <Container sx={{ p: 3, alignItems: "center" }} >
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
                <button>
                  <span>Click Here to Start</span>
                </button>
              </Container>
            </BS.Col>

   
            {/* </Box> */}
          </Box>
        </BS.Row>
      </BS.Container>
    </Box>
  );
};

export default FirstContact;
