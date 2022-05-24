import React from "react";
import * as BS from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ pl: -10, pr: 0 }}>
      <div className="desc">
        <BS.Container>
          <Box
            sx={{
              pt: 5,
              pb: 5,
              display: "flex",
              justifyContent: "center",
              borderRadius: "15px",
            }}
          >
            <BS.Row>
              <BS.Col  md={3} sm={3}>
                <div 
                // data-aos="fade-up-right" data-aos-duration="1000"
                >
                  <Container sx={{ mt: 0, pl: 0, mr:9, justifyContent: "center" }}>
                    <Box
                      variant="h3"
                      // className="white-background"
                      sx={{ p: 0, justifyContent: "center" }}
                    >
                      {" "}
                      <Typography variant="h2" component="h2" sx={{ pb: 5, pt:10 }}>
                        <div className="fontbold">FAQs</div>
                      </Typography>
                    </Box>
                  </Container>
                </div>
              </BS.Col>

              <BS.Col md={6}>
                <Box sx={{ pb: 10, pt: 5 }}>
                <div
                // data-aos="fade-up" data-aos-duration="1000"
                >
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
                      <Typography component={'span'}  sx={{ width: "78%", flexShrink: 0 }}>
                        <div className="fontbold">
                          What is the cost structure to set up an ATM?
                        </div>
                      </Typography>

                      <Typography component={'span'} sx={{ color: "text.secondary" }}>
                        <div className="font">Two Choices</div>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component={'span'} >
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
                      <Typography component={'span'}  sx={{ width: "100%", flexShrink: 0 }}>
                        <div className="fontbold">
                          What is the transaction fee to the customer?
                        </div>
                      </Typography>
                      <Typography component={'span'}  sx={{ color: "text.secondary" }}></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component={'span'} >
                        <Divider sx={{ mb: 3, p: 0 }} />
                        <div className="font">
                          The standard transaction fee is typically between $2
                          and $4
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
                      <Typography component={'span'} sx={{ width: "100%", flexShrink: 0 }}>
                        <div className="fontbold">
                          How long does it take to set up?
                        </div>
                      </Typography>
                      <Typography component={'span'} sx={{ color: "text.secondary" }}></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component={'span'} >
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
                      <Typography component={'span'}  sx={{ width: "100%", flexShrink: 0 }}>
                        <div className="fontbold">
                          How frequently will our ATM be serviced?
                        </div>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component={'span'} >
                        <Divider sx={{ mb: 3, p: 0 }} />
                        <div className="font">
                          Our local team will always be monitoring the reserves,
                          refilling when approiate
                        </div>
                      </Typography>
                    </AccordionDetails>
                
                  </Accordion>
                  </div>
                </Box>
              </BS.Col>
              <BS.Col md={2}>
              <Box sx={{ pb: 10, pt: 8, pl:0 }}>
              <div 
              // data-aos="fade-up-left" data-aos-duration="1000"
              >
              <img src="/faq3.png" height={150} width={150} />
              </div>
           </Box>
              </BS.Col>
            </BS.Row>
          </Box>
        </BS.Container>
      </div>
    </Container>
  );
}
