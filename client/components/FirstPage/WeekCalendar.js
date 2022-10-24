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
                <h4>10/24/22 - 10/29/22</h4>
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
                            href="https://www.eventbrite.com/e/introduction-to-healthcare-services-landscape-tickets-417378980767"
                          >
                            <h3>
                              Introduction to Healthcare Services Landscape
                            </h3>
                          </a>
                        </div>
                        <h4>Kravis 820, 6:00pm-7:00pm </h4>
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
                      </div>
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://gsb-columbia-edu.zoom.us/j/94493164297#success"
                        >
                          <h3>
                            {" "}
                            Real Estate: Argus Training Workshop with Josh Kahr
                          </h3>
                        </a>
                        <h4>
                          {" "}
                          All Day 9:00am - 5:00pm, Location unlocked upon
                          registration)
                        </h4>
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
