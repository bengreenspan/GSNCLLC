import React from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Divider } from "@mui/material";
// import "aos/dist/aos.css"
import Za from "./CustomerComp/Za";
// import CBS from "./CustomerComp/CBS";
import Aos from "aos";
import { Link } from "react-router-dom";

const WeekCalendar = () => {
  return (
    <BS.Container>
      <h2 id="Weekly"></h2>
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
            // data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Typography
              variant="h5"
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
                <h4>11/07/22 - 11/12/22</h4>
                <br />
                <BS.Row>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      className="fontbold"
                    >
                      <h1> Monday:</h1>
                      {/* <br /> */}
                      <div>
                        <div className="links">
                          {/* <a
                            target="_blank"
                            href="https://www.eventbrite.com/e/introduction-to-healthcare-services-landscape-tickets-417378980767"
                          > */}
                          No Events Found
                          {/* </a> */}
                        </div>
                        {/* <h4>Kravis 680, 12:00pm </h4> */}
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
                      <h1> Tuesday:</h1>

                      <div className="links">
                        {/* <a
                            target="_blank"
                            href="https://www.eventbrite.com/e/introduction-to-healthcare-services-landscape-tickets-417378980767"
                          > */}
                        No Events Found
                        {/* </a> */}
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
                      <h1>Wednesday:</h1>
                      {/* <br /> */}
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/StudGov/rsvp_boot?id=33351"
                          >
                            CBS ExBo Headshots Day
                          </a>

                          <h4>
                            10 am – 5 pm, Student Government Office (3rd FL of
                            Geffen),
                          </h4>
                        </div>
                        <br />
                        <div className="links">
                          <div>
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/osa/rsvp_boot?id=31105"
                            >
                              CBS | well: The Art of Choosing with Professor
                              Sheena Iyengar
                            </a>

                            <h4>12:30pm - 2:00pm, Cooperman Commons </h4>
                          </div>
                        </div>
                        <br />
                        <div className="links">
                          <div>
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=32592"
                            >
                              CWiB x MMA x Tech Club Mixer
                            </a>

                            {/* <h4>6:00pm - 8:00pm, Cooperman Commons </h4> */}
                          </div>
                        </div>
                        <br />
                        <div className="links">
                          <div>
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=32952"
                            >
                              Sumitomo Corporation and its Business Strategy for
                              the Future (COPY)
                            </a>

                            <h4>6:15pm - 7:15pm, Kravis 820 </h4>
                          </div>
                        </div>
                        <br />
                        <div className="links">
                          <div>
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=32952"
                            >
                              BBSA/HBA Family Dinner 2022
                            </a>

                            <h4>6:00pm - 9:00pm, Geffen 310 </h4>
                          </div>
                        </div>

                        <br />
                        <div>
                          {" "}
                          Rugby x Real Estate Association
                          <h4>Jake's Dilemma 8:30pm-?? (Open bar)</h4>
                        </div>
                      </div>
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
                      <br />
                      <h1>Thursday:</h1>
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=33779"
                        >
                          To New Heights - CWiB 2022 Conference
                        </a>

                        <h4> All Day, Geffen Hall</h4>
                      </div>
                      <br />
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/HCGD/rsvp_boot?id=29006"
                          >
                            Women in Investment Management Career Panel
                          </a>

                          <h4>12:00pm - 1:00pm Virtual</h4>
                        </div>
                      </div>
                      <br />
                      <div>
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=30144"
                          >
                            CWiB Coaching Sessions
                          </a>

                          <h4>12:15pm - 1:45pm Kravis 490</h4>
                        </div>
                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/osa/rsvp_boot?id=29770"
                          >
                            First Gen Alumni Panel
                          </a>

                          <h4>12:30pm - 1:45pm Kravis 440</h4>
                        </div>
                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=33388"
                          >
                            Technical skills for non-technical job seekers by
                            Technology Club
                          </a>

                          <h4>12:30pm - 1:30pm, Kravis 640</h4>
                        </div>
                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/hcia/rsvp_boot?id=33299"
                          >
                            Ask Us Anything - Digital Health by Health Care
                            Industry Association
                          </a>

                          <h4>1:00pm - 1:45pm Geffen 570 </h4>

                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=32870"
                            >
                              Career AMA by Career Management Center
                            </a>

                            <h4>3:30pm - 5:30pm Geffen 485</h4>
                          </div>

                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/CEO/rsvp_boot?id=33314"
                            >
                              In conversation with Iqram Magdon-Ismail, Founder
                              of Venmo
                            </a>

                            <h4>6:00pm - 7:00pm Geffen 390</h4>
                          </div>
                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=33411"
                            >
                              The Google PM Interview
                            </a>

                            <h4>6:00pm - 7:45pm Geffen 590</h4>
                          </div>
                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/sec/rsvp_boot?id=33331"
                            >
                              Microlumbia - Impact Investing Lifecycle Workshop
                            </a>

                            <h4>6:00pm - 8:00pm Geffen 620</h4>
                          </div>

                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/VCC/rsvp_boot?id=33087"
                            >
                              VCC Alumni x Student Social
                            </a>

                            <h4>6:30pm - 8:30pm Columbia Startup Lab</h4>
                          </div>
                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/osa/rsvp_boot?id=33355"
                            >
                              Black Panther 2 Exclusive Pre-Show Event
                            </a>

                            <h4>7:00pm - 10:00pm AMC Magic Johnson Harlem</h4>
                          </div>
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
                      <br />
                      <h1> Friday:</h1>
                      {/* <br /> */}
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://groups.gsb.columbia.edu/Economics/rsvp_boot?id=32585"
                        >
                          Berkeley-Columbia-Duke-MIT-Northwestern IO theory
                          conference
                        </a>
                        <h4> 9:00am - 6:00pm Kravis</h4>
                      </div>
                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://groups.gsb.columbia.edu/Italian/rsvp_boot?id=32324"
                        >
                          NOVA MBA Yearly Conference 2022 by The Italian Club
                        </a>
                        <h4> 9:00am - 5:00pm, Geffen</h4>
                      </div>
                      <br />
                    </div>
                    {/* <br /> */}
                  </BS.Col>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      // data-aos-offset="200"
                      className="fontbold"
                    >
                      <br />
                      <h1> Saturday:</h1>
                      <div className="links">
                        <div>
                          {/* <a
                            target="_blank"
                            // href="https://milsteincenter.org/civicrm/event/info?reset=1&id=1073"
                          > */}
                          No Events Found
                          {/* <a href="#Weekly">top</a>. */}
                          {/* </a> */}
                          {/* <h4>Randall's Island, Field 51 4:30 Kickoff</h4> */}
                        </div>
                      </div>
                      <br />
                      {/* <div className="links">
                        <a
                          target="_blank"
                          href="https://www.energypolicy.columbia.edu/events-calendar/informational-session-global-energy-fellows-program?utm_source=Center+on+Global+Energy+Policy+Mailing+List&utm_campaign=fb4497b249-EMAIL_CAMPAIGN_2020_07_15_01_21_COPY_01&utm_medium=email&utm_term=0_0773077aac-fb4497b249-102420719"
                        >
                          {" "}
                          Informational Session: Global Energy Fellows Program
                        </a>
                        <h4>
                          {" "}
                          1:00pm - 2:00pm, Center on Global Energy Policy 1255
                          Amsterdam Ave.
                        </h4>
                      </div> */}
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
