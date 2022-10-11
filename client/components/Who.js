import React, { useEffect, useState } from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Aos from "aos";

const Who = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const [value, setValue] = useState("GSNC@LLC.com");
  const [copied, setCopied] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <BS.Container>
      <Box sx={{ pt: 20, pb: 10, display: "flex", justifyContent: "center" }}>
        <Typography component="h1" variant="h2">
          <div
            className="fontbold"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Who Are We?
          </div>
        </Typography>
      </Box>
      <Box
        sx={{
          pt: 5,
          pb: 20,
          display: "flex",
          justifyContent: "center",
          borderRadius: "15px",
        }}
      >
        <div className="gray">
          <BS.Row>
            <BS.Col>
              <div data-aos="fade-left" data-aos-duration="1000">
                <Container sx={{ mt: 5, justifyContent: "center" }}>
                  <Box
                    // variant="h3"
                    // className="white-background"
                    sx={{ justifyContent: "center" }}
                  >
                    {" "}
                    <Typography component={"span"} sx={{ mt: 13 }}>
                      <div className="borderRad1">
                        <h2 className="fontbold">Meet the team</h2>
                      </div>
                    </Typography>
                    <br />
                    <BS.Col md={12} sm={12} xs={12}>
                      <Typography component={"span"} sx={{ mt: 5, pb: 0 }}>
                        <h5 className="font">
                          <div className="borderRad1">
                            Haas '24 and Ben '24 are two entrepreneurial minded
                            Columbia EMBA students dedicated to finding the most
                            useful and relevant information for Columbia
                            Business School students.
                            <br />
                            <br />
                   
Our mission is to aggregate and link to CBS events in one convenient place. This includes speakers, club events, as well as school run activities. Non CBS events of larger importance will be added as well. 
               
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
              <div data-aos="fade-left" data-aos-duration="1000">
                <Container sx={{ mt: 5, justifyContent: "center" }}>
                  <Box
                    // variant="h3"
                    // className="white-background"
                    sx={{ p: 3, pt: 8, justifyContent: "center" }}
                  >
                    <Box
                      // variant="h3"
                      // className="white-background"
                      sx={{ pb: 8, justifyContent: "center" }}
                    >
                      {" "}
                      <div data-aos="fade-up">
                        <div className="borderRad">
                          <Typography
                            component={"span"}
                            variant="h4"
                            sx={{ pl: 5, pt: 3, pb: 4 }}
                          >
                            <h1>Chief Contributor</h1>
                            <img src="/indian.jpeg" height={130} /> Haas
                          </Typography>
                        </div>
                      </div>
                      <br />
                      <div data-aos="fade-down">
                        <div className="borderRad">
                          <Typography
                            component={"span"}
                            variant="h4"
                            sx={{ pl: 5, pt: 3, pb: 4 }}
                          >
                            <h1>Head Editor</h1>
                            <img src="/jewish.jpeg" height={130} /> Ben
                          </Typography>
                        </div>
                      </div>
                    </Box>

                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          component="h2"
                          id="modal-modal-title"
                          variant="h6"
                        >
                          To fill out an ATM form:
                          <br />
                          <Link to={"/Blog#"}>Click here</Link> <br />
                          or <br />
                          Email us at: GSNC@GSNCLLC.com
                        </Typography>
                        <Typography
                          component={"span"}
                          id="modal-modal-description"
                          sx={{ mt: 2 }}
                        >
                          <CopyToClipboard
                            text={value}
                            onCopy={() => setCopied(true)}
                          >
                            <Button>Copy email to clipboard</Button>
                          </CopyToClipboard>

                          {copied ? (
                            <span
                              style={{ color: "black", background: "white" }}
                            >
                              <br />
                              Email succesfully copied.
                            </span>
                          ) : null}
                        </Typography>
                      </Box>
                    </Modal>
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
