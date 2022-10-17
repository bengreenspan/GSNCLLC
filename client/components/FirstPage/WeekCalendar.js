import React from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Divider } from "@mui/material";
// import "aos/dist/aos.css"
import Za from "./CustomerComp/Za";
import CBS from "./CustomerComp/CBS";
import Aos from "aos";
import { Link } from "react-router-dom";

const WeekCalendar = () => {
  return (
    <BS.Container>
      <Container sx={{ pt: 10, pb: 10 }}>
        <Box
          sx={{
            pt: 3,
            pl: 3,
            pr: 3,
            pb: 3,

            display: "flex",
            justifyContent: "left",
          }}
        >
          <div
            className="fontbold"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Typography
              variant="h3"
              // className="white-background"
              sx={{
                pt: 3,
                pl: 3,
                pr: 3,
                pb: 3,
                justifyContent: "center",
              }}
            >
              <div className="fontbold">
                Weekly Events
                <h4>10/17/22 - 10/22/22</h4>
                <br />
                <BS.Row>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      className="fontbold"
                    >
                      Monday:
                      <br />
                      <div>
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://www8.gsb.columbia.edu/newsroom/newsn/13258/columbia-business-school-launches-new-digital-future-initiative
                            "
                          >
                            <h3>
                              Columbia University Digital Finance Seminar Series
                            </h3>
                          </a>
                        </div>
                        <h4>620 Geffen Hall, 5:45pm-6:45pm </h4>
                      </div>
                      <br />
                    </div>
                  </BS.Col>

                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="200"
                      className="fontbold"
                    >
                      Tuesday:
                      <br />
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            // href="https://milsteincenter.org/civicrm/event/info?reset=1&id=1073"
                          >
                            <h3>No Events Found</h3>
                          </a>

                          {/* <h4>Kravis 840 12:30pm-1:30pm (Lunch Provided)</h4> */}
                        </div>
                      </div>
                      <br />
                    </div>
                  </BS.Col>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="300"
                      className="fontbold"
                    >
                      Wednesday:
                      <div>
                        <div className="links">
                          <a
                            target="_blank"
                            // href="https://columbiauniversity.zoom.us/meeting/register/tJYvcO-oqDopEtzEu3OvdPKOyKWq8ubj7IP4%20 "
                          >
                            <h3>Blood Drive!</h3>
                          </a>
                        </div>
                        <h4>
                          {" "}
                          10:00am - 4:00pm, Columbia University Irving Medical
                          Center 50 Haven Avenue, Main Lounge
                        </h4>
                      </div>
                      <br />
                      <div>
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/XPCM/rsvp_boot?id=29390"
                          >
                            <h3>
                              An Easy Way to Start a Job Search - "Two Hour Job
                              Search"{" "}
                            </h3>
                          </a>
                        </div>
                        <h4> 5:30pm - 6:30pm, virtual</h4>
                      </div>
                      <br />
                      <div>
                        {" "}
                        <h3> Rugby x Energy & Infrastructure</h3>
                        <h4>Jake's Dilemma 8:30pm-?? (Open bar)</h4>
                      </div>
                      <br />
                    </div>
                  </BS.Col>
                </BS.Row>
                <BS.Row>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="300"
                      className="fontbold"
                    >
                      Thursday:
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            // href="https://milsteincenter.org/civicrm/event/info?reset=1&id=1073"
                          >
                            <h3>No Events Found</h3>
                          </a>

                          {/* <h4>Kravis 840 12:30pm-1:30pm (Lunch Provided)</h4> */}
                        </div>
                      </div>
                    </div>
                  </BS.Col>

                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="200"
                      // className="fontbold"
                    >
                      Friday:
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://gsb-columbia-edu.zoom.us/j/94493164297#success"
                        >
                          <h3>Lang Center Virtual Office Hours</h3>
                        </a>
                        <h4> 1:15pm-2:15 pm</h4>
                        {/* <h4> Event free with code: C4G100off </h4> */}
                      </div>
                    </div>
                    <br />
                  </BS.Col>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      // data-aos-offset="200"
                      className="fontbold"
                    >
                      Saturday:
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://groups.gsb.columbia.edu/FinTech/rsvp_boot?id=32693"
                        >
                          <h3>EMBA - Fintech & Blockchain Kick Off</h3>
                        </a>
                        <h4> 11:30am-12:30pm, Geffen 380</h4>
                        <h4> Meet the board, ask questions, alot of ice cream </h4>
                      </div>
                    </div>
                  </BS.Col>
                </BS.Row>
              </div>
            </Typography>
          </div>
        </Box>
        <br /> <br /> <br /> <br /> <br /> <br />
      </Container>
    </BS.Container>
  );
};
export default WeekCalendar;
