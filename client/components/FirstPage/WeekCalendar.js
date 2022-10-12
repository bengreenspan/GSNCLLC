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
                      Monday 10/10:
                      <div>
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/vcc/rsvp_boot?id=32333"
                          >
                            <h2>
                              Technology Pioneers Series: Fireside Chat with
                              Alan Patricof
                            </h2>
                          </a>
                        </div>
                        {/* <h4>20 person limit</h4> */}
                        <h4>Cooperman Commons, Geffen Hall, 12:00pm-1:00pm </h4>
                      </div>
                      <br />
                      <div>
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://www.eventbrite.com/e/the-innovation-mindset-eight-essential-steps-to-transform-any-industry-tickets-417241991027?lang=en-us&locale=en_US&status=30&view=listing"
                          >
                            <h2>
                              The Innovation Mindset: Eight Essential Steps to
                              Transform Any Industry
                            </h2>
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
                            <h2>
                              Lenapehoking: On Indigenous Epistemologies and the
                              Idea of the University
                            </h2>
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
                            <h2>
                              A lecture by Raven Chacon, composer, performer and
                              installation artist from the Navajo Nation
                            </h2>
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
                            <h2>
                              {" "}
                              Tech Club: Product Management Day in the Life
                            </h2>
                          </a>
                        </div>
                        <h2>
                          <h4>Geffin 620 6:00pm-7:30pm </h4>
                        </h2>
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
                      Tuesday 10/11:
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://milsteincenter.org/civicrm/event/info?reset=1&id=1073

                    "
                          >
                            <h2>
                              Distinguished Speaker Series with Matthew Lustig:
                              Real Estate IB, Lazard
                            </h2>
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
                      Wednesday 10/12:
                      {/* <br /> */}
                      <div>
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://columbiauniversity.zoom.us/meeting/register/tJYvcO-oqDopEtzEu3OvdPKOyKWq8ubj7IP4%20 "
                          >
                            <h2>
                              CU there! Presents: The Art and Science of
                              Networking{" "}
                            </h2>
                          </a>
                        </div>
                        <h4> Virtual, 8:00pm - 9:00pm </h4>
                      </div>
                      <br />
                      <div>
                        {" "}
                        <h2> Rugby x Hispanic Business Assocation (HBA)</h2>
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
                      Thursday 10/13:
                    </div>
                  </BS.Col>

                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="200"
                      className="fontbold"
                    >
                      Friday 10/14:
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://columbiasocialenterprise.org/civicrm/event/register?id=866&reset=1"
                        >
                          <h2>
                            21st Annual Social Enterprise Conference, Capital
                            for Good, Tamer Institute
                          </h2>
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
                      Saturday 10/15:
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

// <div className="fontbold">Sample Partners</div>
// <br />
// <h2 className="font1">
//   Check out a few of our partners. These types of businesses
//   models lend themselves to synergies with their ATM
//   solution.
//   </h2>
