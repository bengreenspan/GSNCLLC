import React, { useEffect } from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Aos from "Aos";


const Who = () => {
  // useEffect(() => {
  //   Aos.init({});
  // }, []);

  return (

      <BS.Container>
 <Box sx={{ pt: 20, pb: 10, display: "flex", justifyContent: "center" }}>
          <Typography component="h1" variant="h2">
            <div
              className="fontbold"
              // data-aos="fade-right"
              // data-aos-duration="1000"
            >
    Who Are We?
            </div>
          </Typography>
        </Box>
        <Box
          sx={{
            pt: 5,
            pb: 10,
            display: "flex",
            justifyContent: "center",
            borderRadius: "15px",
          }}
        >
          
              <div className="gray">
          <BS.Row>
            <BS.Col>
              <div 
              // data-aos="fade-left" data-aos-duration="1000"
              >
                <Container sx={{ mt: 5, justifyContent: "center" }}>
                  <Box
                    // variant="h3"
                    // className="white-background"
                    sx={{ justifyContent: "center" }}
                  >
                    {" "}
                    <Typography sx={{ mt: 13 }}>
                      <div className="borderRad1">
                        <h2 className="fontbold">Meet our team</h2>
                      </div>
                    </Typography>
                    <br />
                    <BS.Col md={12} sm={12} xs={12}>
                      <Typography sx={{ mt: 5, pb: 0 }}>
                        <h5 className="font">
                          <div className="borderRad1">
                            Cameron and Nathaniel are two entrepreneurial
                            professionals living in the Lower East Side of New
                            York City. We have safely and securley transport
                            millions of dollars across many locations in
                            Manhattan.
                            <br />
                            <br />
                            We are always looking for further opportunites to expand
                            our operation with growing local businesses. 
                          </div>
                        </h5>
                      </Typography>
                    </BS.Col>
                    <br />
                    <br />
                    <br />
                  </Box>
                </Container>
              </div>
            </BS.Col>

            <BS.Col sm={7} xs={12}>
              <div 
              // data-aos="fade-left" data-aos-duration="1000"
              >
                <Container sx={{ mt: 5, justifyContent: "center" }}>
                  <Box
                    // variant="h3"
                    // className="white-background"
                    sx={{ p: 3, pt: 8, justifyContent: "center" }}
                  >
                    {" "}
                    {/* <div data-aos="fade-up"> */}
                      <div className="borderRad">
                        <Typography variant="h3" sx={{ pl: 5, pt: 3, pb: 1 }}>
                          <img src="/cam.jpeg" height={130} /> Cameron
                        </Typography>
                      </div>
                    {/* </div> */}
                    <br />
                    {/* <div data-aos="fade-down"> */}
                      <div className="borderRad">
                        <Typography variant="h3" sx={{ pl: 5, pt: 3, pb: 1 }}>
                          <img src="/nate.jpeg" height={130} /> Nathaniel
                        </Typography>
                      </div>
                    {/* </div> */}
                    <Typography sx={{ pt: 4 }}>
                      <div
                        // data-aos="fade-right"
                        // data-aos-duration="500"
                      >

<div className="desc">
<Link to="/info">

<button> Click Here to Start</button>
</Link>
                      </div>
                      </div>
                    </Typography>
                  </Box>
                </Container>
              </div>
            </BS.Col>
          </BS.Row>
          </div>
        </Box>
      </BS.Container>


    // <BS.Container>
    //   <Box
    //     sx={{
    //       pt: 30,
    //       display: "flex",
    //       justifyContent: "center",
    //       borderRadius: "15px",
    //     }}
    //   >
    //     <BS.Row>
    //       <BS.Col sm={7} xs={12}>
    //         <div data-aos="fade-right" data-aos-duration="1000">

    //           <br />
    //           <div className="borderRad">

    //             <Typography variant="h3" sx={{ pl: 5, pt: 4 }}>
    //               Nathaniel
    //             </Typography>
    //           </div>
    //         </div>

    //       </BS.Col>

    //       <BS.Col sm={5}>
    //         <div data-aos="fade-left" data-aos-duration="1000">
    //           <Container sx={{ justifyContent: "center" }}>
    //             <Box sx={{ p: 3, justifyContent: "center" }}>
    //               {" "}
    //               <Typography>
    //                 <h1 className="fontbold"></h1>
    //                 <br />
    //                 <br />
    //                 <div className="font">

    //                 </div>
    //                 <Box sx={{pr:10}}>
    //                 <Contact/>
    //                 </Box>
    //                 <br />

    //                 <br />
    //                 <br />
    //                 <br />

    //               </Typography>
    //             </Box>
    //           </Container>
    //         </div>
    //       </BS.Col>
    //     </BS.Row>
    //   </Box>
    // </BS.Container>
  );
};

export default Who;
