import React from "react";
import * as BS from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Aos from "Aos";
import { Divider } from "@mui/material";
import { Parallax, Background } from "react-parallax";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ pl: 0, pr: 0 }}>
      <BS.Container>
        <div data-aos="fade-up" data-aos-duration="2000">
          <BS.Row>
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
                      {/* <div className="transparent"> */}{" "}
                      <img src="/faq3.png" height={230} />
                      {/* </div> */}
                      {/* </Parallax> */}
                    </div>
                  </BS.Col>

                  <BS.Col sm={7} xs={7}>
                    <div data-aos="fade-left" data-aos-duration="1000">
                      <Container
                        sx={{ mt: 5, pl: 21, justifyContent: "center" }}
                      >
                        <Box
                          variant="h2"
                          // className="white-background"
                          sx={{ p: 3, justifyContent: "center" }}
                        >
                          {" "}
             
                          <Typography variant="h1" component="h1" sx={{ pb: 5 }}>
              <div className="fontbold">FAQs</div>
            </Typography>
                         
                        </Box>
                      </Container>
                    </div>
                  </BS.Col>
                </BS.Row>
              </Box>
            </BS.Container>

            <BS.Col md={12}>
              <Box sx={{ pb: 10 }}>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={{ background: "white" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: "78%", flexShrink: 0 }}>
                      <div className="fontbold">
                        What is the cost structure to set up an ATM?
                      </div>
                    </Typography>

                    <Typography sx={{ color: "text.secondary" }}>
                      <div className="font">Two Choices</div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Divider sx={{ mb: 3, p: 0 }} />
                      <div className="font">
                        Businesses can opt to either pay zero upfront cost and
                        share in the transaction fee,
                        <br />
                        or purchase the ATM through GSNC LLC and receive the
                        full transaction fee from usage
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ width: "100%", flexShrink: 0 }}>
                      <div className="fontbold">
                        What is the transaction fee to the customer?
                      </div>
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Divider sx={{ mb: 3, p: 0 }} />
                      <div className="font">
                        The standard transaction fee is typically between $2 and
                        $4
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ width: "100%", flexShrink: 0 }}>
                      <div className="fontbold">
                        How long does it take to set up?
                      </div>
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Divider sx={{ mb: 3, p: 0 }} />
                      <div className="font">
                        Your state of the art ATM can be installed by our
                        professionals within a couple of days
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={{ width: "100%", flexShrink: 0 }}>
                      <div className="fontbold">
                        How frequently will our ATM be serviced?
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Divider sx={{ mb: 3, p: 0 }} />
                      <div className="font">
                        Our local team will always be monitoring the reserves,
                        refilling when approiate
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </BS.Col>
          </BS.Row>
        </div>
      </BS.Container>
    </Container>
  );
}
