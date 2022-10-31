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
                <h4>10/31/22 - 11/05/22</h4>
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

                      {/* <br /> */}
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://columbia.startuptree.co/event/s/EZbEVNLjRFa2gq3FopnVqq/VC-%2526-Entrepreneurship-Courses-Info-Session"
                          >
                            VC Courses Info Session
                          </a>

                          <h4>Virtual, 12:30pm-1:30pm</h4>
                          <br />
                        </div>
                      </div>
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://entrepreneurship.columbia.edu/event/pitch-practice-workshop-virtual-impressing-venture-competition-judges-and-angels-in-5-minutes-or-less/"
                          >
                            Impressing Venture Competition Judges (And Angels)
                            in 5 Minutes or Less
                          </a>

                          <h4>2:00pm-3:00pm, Virtual</h4>
                        </div>
                      </div>
                      <br />
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://www.eventbrite.com/e/microplastic-madness-film-screening-and-panel-discussion-tickets-430709893887"
                          >
                            Microplastic Madness: Film Screening and Panel
                            Discussion by the Columbia Climate School
                          </a>

                          <h4>5:00pm - 7:00pm, The Forum </h4>
                        </div>
                        <br />
                      </div>
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/FinStudies/rsvp_boot?id=32748"
                          >
                            State of Global Markets presentation by Program for
                            Financial Studies
                          </a>

                          <h4>5:30pm - 7:00pm, Kravis 670 </h4>
                        </div>
                      </div>
                      <br />
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://www.eventbrite.com/e/an-evening-with-alice-chen-05-ceo-99-ranch-market-tickets-444593981567?aff=ebdssbdestsearch#search"
                          >
                            An Evening with Alice Chen '05, CEO, 99 Ranch Market
                          </a>

                          <h4>6:30pm - 8:30pm, 120 Cooperman Commons</h4>
                        </div>
                      </div>
                      <br />
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/abc/rsvp_boot?id=32762"
                          >
                            Getting into Google: An Illuminatory Panel
                            (Presented by ABC x BBSA x HBA x Technology Club)
                          </a>

                          <h4>5:30pm - 7:00pm, Geffen 520 </h4>
                        </div>
                      </div>
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
                            href="https://harriman.columbia.edu/event/world-leaders-forum-klaus-welle-secretary-general-of-the-european-parliament/"
                          >
                            World Leaders Forum: The War Against Ukraine
                          </a>

                          <h4>
                            11:30am - 12:30pm Rotunda, Low Memorial Library
                          </h4>
                        </div>
                        <br />
                        <div className="links">
                          <div>
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/XPCM/rsvp_boot?id=29392"
                            >
                              The Art of Salary Negotiation by Experienced
                              Professionals Career Management
                            </a>

                            <h4>5:30pm - 6:30pm, Virtual </h4>
                          </div>
                        </div>
                        <br />
                        <div>
                          <a
                            target="_blank"
                            href="https://www.eventbrite.com/e/evaluating-future-digital-health-opportunity-tickets-443473510207"
                          >
                            Evaluating Future Digital Health Opportunity
                          </a>

                          <h4>6:30pm - 7:30pm, Kravis 640 </h4>
                        </div>
                        <br />
                        <div>
                          {" "}
                          Rugby x Sports Business Association
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
                          href="https://universitylife.columbia.edu/events/women-life-freedom-irans-movement-womens-rights"
                        >
                          Women, Life, Freedom: Iran's Movement for Women's
                          Rights
                        </a>

                        <h4>12:00pm - 1:00pm Virtual</h4>
                      </div>
                      <br />
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://sanfordbernsteincenter.org/civicrm/event/info?reset=1&id=254"
                          >
                            Running While Black: Finding Freedom in a Sport That
                            Wasn't Built for Us
                          </a>

                          <h4>12:30pm - 1:15pm Kravis 870 (PPIL approved)</h4>
                        </div>
                      </div>
                      <br />
                      <div>
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/MAC/rsvp_boot?id=32836"
                          >
                            Mock Madness: Product & Brand Marketing Case
                            Interviews by Marketing Association
                          </a>

                          <h4>12:30pm - 1:30pm Kravis 680</h4>
                        </div>
                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://www.eventbrite.com/e/building-a-new-business-in-japan-tickets-423452366427"
                          >
                            Building a New Business in Japan
                          </a>

                          <h4>12:30pm - 1:30pm Geffen 570</h4>
                        </div>
                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://partiful.com/e/ppr3syjdNy8d28aPSFtp"
                          >
                            ClusterQ x BBSA Disco Party, $40 pp open bar!
                          </a>

                          <h4>9:30pm - 11:30pm RVSP to see location</h4>
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
                          href="https://groups.gsb.columbia.edu/MAC/rsvp_boot?id=30997"
                        >
                    The Future of Marketing in the Digital Age - MAC Fall Conference 2022
                        </a>
                        <h4>
                          {" "}
                        9:00am - 4:00pm Geffen Hall
                        </h4>
                      </div>
                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://columbia.startuptree.co/event/s/6jKEWn6PsHmVhqYMNT9ZrC/Leading-in-a-Data-driven-World%253A-Developing-Quantitative-Intuition"
                        >
                         Leading in a Data-driven World: Developing Quantitative Intuition
                        </a>
                        <h4> 12:00pm - 1:00pm, Virtual</h4>
                      </div>
                      <br />
                    
                 
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
