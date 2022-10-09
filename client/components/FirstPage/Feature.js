import React from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
// import "aos/dist/aos.css"
import Za from "./CustomerComp/Za";
import CBS from "./CustomerComp/CBS";
import Aos from "aos";
import { Link } from "react-router-dom";

const Customers = () => {
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
          <BS.Col sm={5} xs={8}>
            <div
            data-aos="fade-left" data-aos-duration="1000"
            >
              <Container sx={{ mt: 0, pl: 30, justifyContent: "center" }}>
                <Box
                  // variant="h3"
                  // className="white-background"
                  sx={{ justifyContent: "center" }}
                >
                  {" "}
                  <Typography component={"span"} sx={{ mt: 5, pb: 5,  }}>
                    <h1 className="fontbold">Featured Event</h1>
                    <br />
                  </Typography>
                  {/* <Typography component={"span"} sx={{ pr: 210}}> */}
                  <img src="/one2.png" alt="one" width="250" height="225" />
                  {/* </Typography> */}
                  <br />
                  <br />
                  <br />
                  <br />
                  <Typography component={"span"} sx={{ mt: 10, pb: 0 }}>
                    <h4 className="font">
                    CREtech is the global leader of events and thought leadership in built world innovation and technology. The CREtech platform brings together 100,000+ and growing global innovators from leading startups, investors, owners/operators, developers and brokers as well as thousands of in-person attendees annually.
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
             data-aos="fade-left" data-aos-duration="1000"
            >
              <Container sx={{  justifyContent: "center" }}>
                <Box
                  // variant="h3"
                  // className="white-background"
                  sx={{ p: 3, justifyContent: "center" }}
                >
                  {" "}
                  <div data-aos="fade-left">
                  <Typography component={"span"} sx={{ mt: 5, pb: 5,  }}>
                  <h1 className="fontbold">10/12 & 10/13</h1>
                  <br />
                    <h1 className="font">Commercial Real Estate Tech Conference </h1>
                    <br />
                  </Typography>
                  <CBS />
                  </div>
                  <br />

                  <div      className="firstbutton" data-aos="fade-down">
                  <Typography sx={{ pt: 4, pl:10 }}>
                      <div
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-duration="2000"
                      >
    
                        {/* <Link to="/Blog" href="#">
                          <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">All Events</span>
                          </button>
                        </Link> */}
                      </div>
                    </Typography>
                  </div>
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
