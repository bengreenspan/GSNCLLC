import React from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
// import "aos/dist/aos.css"
import Za from "./CustomerComp/Za";
import Mc from "./CustomerComp/Mc";

const Customers = () => {
  console.log('tits')
  return (
    <BS.Container>
      <Box
        sx={{
          pt: 10,
          pb: 15,
          display: "flex",
          justifyContent: "center",
          borderRadius: "15px",
        }}
      >
        <BS.Row>
          <BS.Col sm={5} xs={8}>
            <div 
            // data-aos="fade-left" data-aos-duration="1000"
            >
              <Container sx={{ mt: 5, pl: 30, justifyContent: "center" }}>
                <Box
                  // variant="h3"
                  // className="white-background"
                  sx={{ justifyContent: "center" }}
                >
                  {" "}
                  <Typography sx={{mt:10, pb:5}}>
                    <h1 className="fontbold">
                      
             Customer Comes 1st
                    </h1>
                    </Typography>
                    <img src="/one1.png" alt="one" width="300" height="225"/> 
                    <br />
                    <Typography sx={{mt:10, pb:0}}>
                    <h4 className="font">
                We are wholely committed to provided first class service to our customers. Check out some of our featured partners!
                    </h4>
                    </Typography>
                    <br />
                    <br />
                    <br />
 
                </Box>
              </Container>
            </div>
          </BS.Col>

          <BS.Col sm={7} xs={12}>
            <div
            //  data-aos="fade-left" data-aos-duration="1000"
             >
              <Container sx={{ mt: 5, justifyContent: "center" }}>
                <Box
                  // variant="h3"
                  // className="white-background"
                  sx={{ p: 3, justifyContent: "center" }}
                >
                  {" "}
                  {/* <div data-aos="fade-up"> */}
                    <Mc />
                  {/* </div> */}
                  <br />
                  {/* <div data-aos="fade-down"> */}
                    <Za />
                  {/* </div> */}
                </Box>
              </Container>
            </div>
          </BS.Col>
        </BS.Row>
      </Box>
    </BS.Container>
  );
};
export default Customers;

// <div className="fontbold">Sample Partners</div>
// <br />
// <h2 className="font1">
//   Check out a few of our partners. These types of businesses
//   models lend themselves to synergies with their ATM
//   solution.
//   </h2>
