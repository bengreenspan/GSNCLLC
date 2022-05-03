import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import { Divider } from "@mui/material";
import Form from "./Form";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { Parallax, Background } from "react-parallax";

const FirstContact = () => {
  return (
    <Parallax bgImage={"./atmb1.png"} strength={150}>
      <Container
        sx={{ display: "flex" }}
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        {/* <ThemeProvider theme={theme}> */}
        <Box sx={{ pl: 1 }}>
          <Box
            sx={{ pt: 12, pb: 8, display: "flex", justifyContent: "center" }}
          >
            <Typography
              component="h1"
              variant="h2"
              sx={{
                boxShadow: 10,
                border: "#0487cd",
                backgroundColor: "#FFF",
                p: 3,
                borderRadius: 3,
              }}
            >
              Reach Out Now
            </Typography>
          </Box>
          <Divider sx={{ m: 0, p: 0 }} />
          <Container>
            <Typography component="h4" variant="h4" sx={{ pt: 10, pb: 10 }}>
              <Typography
                component="h3"
                variant="h4"
                sx={{
                  boxShadow: 5,
                  border: "#0487cd",
                  backgroundColor: "#FFF",
                  p: 3,
                  borderRadius: 3,
                }}
              >
                If you are interesting in becoming a client or would like to
                discuss a potential partnership
              </Typography>
              <Typography className="text-box">
                <a href="/info" className="btn btn-white btn-        animate">
                  {" "}
                  Click here
                </a>
              </Typography>
            </Typography>
          </Container>
        </Box>
      </Container>
    </Parallax>
  );
};

export default FirstContact;
