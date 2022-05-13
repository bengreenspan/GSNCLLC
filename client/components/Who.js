import React, {useEffect} from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import { Divider } from "@mui/material";
import { Parallax, Background } from "react-parallax";
// import theme from "../../Theme";
import Aos from "Aos";
// import 'aos/dist/aos.css;'

const Who = () => {

  useEffect(() => {
    Aos.init({});
  }, []);


  return (
 
    <BS.Container>
      <Box
        sx={{
          pt: 20,
          pb: 15,
          display: "flex",
          justifyContent: "center",
          borderRadius: "15px",
        }}
      >
        <BS.Row>
          <BS.Col sm={5}>
            <div data-aos="fade-right" data-aos-duration="1000">
              {/* <Parallax bgImage={"/hysoun1.png"} strength={-150}> */}
                {/* <div className="transparent"> */}
                  {" "}
                  <img src="/cam.jpeg" height={130} />
                  <img src="/nate.jpeg" height={130} />
                {/* </div> */}
              {/* </Parallax> */}
            </div>
          </BS.Col>

          <BS.Col sm={7}>
            <div data-aos="fade-left" data-aos-duration="1000">
              <Container sx={{ mt: 5, justifyContent: "center" }}>
                <Box
                  // variant="h3"
                  // className="white-background"
                  sx={{ p: 3, justifyContent: "center" }}
                >
                  {" "}
                  <Typography>
                    <h1 className="fontbold">
                    Who Are We?
                    </h1>
                    <br />
                    <br />
                    <div className="font">
                    We are Nathaniel and Cameron. Two entrepreneurial
       professionals living in the Lower East Side of New York City. We
       have safely and securley transport millions of dollars across many
       locations in Manhattan. We are looking for further opportunites to
       expand our operation with growing local businesses. Contact us down
       below.
                    </div>
                    <br />
                    
                    <br />
                    <br />
                    <br />
                    <button>
                      <span>Click Here to Start</span>
                    </button>
                  </Typography>
                </Box>
              </Container>
            </div>
          </BS.Col>
        </BS.Row>
      </Box>
    </BS.Container>

  );
};

export default Who;







// <Container>
// {/* <ThemeProvider theme={theme}> */}
// <Box sx={{ pl: 1 }}>
//   <Box sx={{ pt: 4, pb: 3, display: "flex", justifyContent: "center" }}>
//     <Typography component="h1" variant="h2">
// 
//     </Typography>
//   </Box>
//   <Divider sx={{ m: 0, p: 0 }} />
//   <Box sx={{ pb: 4, pl: 2, pt: 3 }}>
//     <Box sx={{ pt: 4, pb: 3, display: "flex", justifyContent: "center" }}>
//       <img  height={150} />
//       <img src="/nate.jpeg" height={150} />
//     </Box>
//     <Typography component="h4" variant="subtitle1">
//       {" "}
//       We are Nate Gallagher and Cam Surgrue. Two entrepreneurial
//       professionals living in the lower east side of New York City. We
//       have safely and securley transport millions of dollars across many
//       locations in Manhattan. We are looking for further opportunites to
//       expand our operation with growing local businesses. Contact us down
//       below.
//     </Typography>
//   </Box>
// </Box>
// {/* </ThemeProvider> */}
// </Container>