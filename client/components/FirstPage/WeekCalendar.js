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
                <h4>10/10/22 - 10/14/22</h4>
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
                            href="https://groups.gsb.columbia.edu/vcc/rsvp_boot?id=32333"
                          >
                            <h3>
                              Technology Pioneers Series: Fireside Chat with
                              Alan Patricof
                            </h3>
                          </a>
                        </div>
                        <h4>Cooperman Commons, Geffen Hall, 12:00pm-1:00pm </h4>
                      </div>
                      <br />
                      <div>
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://www.eventbrite.com/e/the-innovation-mindset-eight-essential-steps-to-transform-any-industry-tickets-417241991027?lang=en-us&locale=en_US&status=30&view=listing"
                          >
                            <h3>
                              The Innovation Mindset: Eight Essential Steps to
                              Transform Any Industry
                            </h3>
                          </a>
                        </div>
                        {/* <h4>20 person limit</h4> */}
                        <h4>Avery Hall, Wood Auditorium 6:30pm</h4>
                      </div>
                      <br />
                      <div>
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://www.publichealth.columbia.edu/public-health-now/events/lenapehoking-indigenous-epistemologies-and-idea-university"
                          >
                            <h3>
                              Lenapehoking: On Indigenous Epistemologies and the
                              Idea of the University
                            </h3>
                          </a>
                        </div>
                        {/* <h4>20 person limit</h4> */}
                        <h4>
                          Allan Rosenfield Building, 722 West 168th St.
                          3:30pm-5:00pm{" "}
                        </h4>
                      </div>
                      <br />
                      <div>
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://www.arch.columbia.edu/events/2752-raven-chacon?utm_source=newsletter&utm_medium=email&utm_campaign=highlights100722"
                          >
                            <h3>
                              A lecture by Raven Chacon, composer, performer and
                              installation artist from the Navajo Nation
                            </h3>
                          </a>
                        </div>
                        {/* <h4>20 person limit</h4> */}
                        <h4>
                          Allan Rosenfield Building, 722 West 168th St.
                          3:30pm-5:00pm{" "}
                        </h4>
                      </div>
                      <br />
                      <div>
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=29831"
                          >
                            <h3>
                              {" "}
                              Tech Club: Product Management Day in the Life
                            </h3>
                          </a>
                        </div>
                        <h3>
                          <h4>Geffin 620 6:00pm-7:30pm </h4>
                        </h3>
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
                            href="https://milsteincenter.org/civicrm/event/info?reset=1&id=1073

                    "
                          >
                            <h3>
                              Distinguished Speaker Series with Matthew Lustig:
                              Real Estate IB, Lazard
                            </h3>
                          </a>

                          <h4>Kravis 840 12:30pm-1:30pm (Lunch Provided)</h4>
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
                            href="https://columbiauniversity.zoom.us/meeting/register/tJYvcO-oqDopEtzEu3OvdPKOyKWq8ubj7IP4%20 "
                          >
                            <h3>
                              CU there! Presents: The Art and Science of
                              Networking{" "}
                            </h3>
                          </a>
                        </div>
                        <h4> Virtual, 8:00pm - 9:00pm </h4>
                      </div>
                      <br />
                      <div>
                        {" "}
                        <h3> Rugby x Hispanic Business Assocation (HBA)</h3>
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
                    </div>
                  </BS.Col>

                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="200"
                      className="fontbold"
                    >
                      Friday:
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://columbiasocialenterprise.org/civicrm/event/register?id=866&reset=1"
                        >
                          <h3>
                            21st Annual Social Enterprise Conference, Capital
                            for Good, Tamer Institute
                          </h3>
                        </a>
                        <h4> Cooperman Commons, 8am - 6:30pm </h4>
                        <h4> Event free with code: C4G100off </h4>
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
