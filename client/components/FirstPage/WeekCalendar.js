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
                     <h1> Monday:</h1>
                      {/* <br /> */}
                      <div>
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://www.eventbrite.com/e/introduction-to-healthcare-services-landscape-tickets-417378980767"
                          >
                          SABA Diwali Mithai Munchies
                          </a>
                        </div>
                        <h4>Kravis 680, 12:00pm </h4>
                      </div>
                      <br />
                      <div>
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://www.eventbrite.com/e/introduction-to-healthcare-services-landscape-tickets-417378980767"
                          >
                          
                              Introduction to Healthcare Services Landscape
                            
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
                                          <h1>           Tuesday:</h1>
            
                      {/* <br /> */}
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=32440"
                          >
                          Tech Club Fireside Chat with Christian Lee 
                          </a>

                          <h4>
                            Location Unlocked on Registration 12:00pm-1:30pm
                            (Lunch Provided)
                          </h4>
                        </div>
                      </div>
                      <br />
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://us02web.zoom.us/webinar/register/7716655245659/WN_o_zS6ekQQbKQgqQHZK5Clw"
                          >
                          
                              Back to School: What Gabby Slome, Co-Founder of
                              Ollie and Cooper, Learned in Business School{" "}
                            
                          </a>

                          <h4>Virtual Event 1:00pm -</h4>
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
                      
                      <h1>Wednesday:</h1>
                      {/* <br /> */}
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/FinStudies/rsvp_boot?id=32739"
                          >
                          No Free Lunch Research Seminar Series
                          </a>

                          <h4>
                            Location Unlocked on Registration 12:15pm-1:30pm
                            (Lunch Provided)
                          </h4>
                        </div>
                        <br />
                        <div>
                          {" "}
                         Rugby x Energy & Infrastructure
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
                     <h1>Thursday:</h1> 
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=29771"
                          >
                          
                              Bootstrapping a Japanese Snack Subscription to
                              $100M Valuation in 5 Years
                            
                          </a>

                          <h4>
                            Location Displayed on Registration 12:30pm-1:30pm
                            (Lunch Provided)
                          </h4>
                        </div>
                      </div>
                      <br />
                      <div >
                        <div className="links">
                          <a
                            target="_blank"
                            href="https://www.eventbrite.com/e/fundraising-in-a-challenging-environment-with-lauri-moore-09cc-tickets-444634282107"
                          >
                          
                              Fundraising in a Challenging Environment with
                              Lauri Moore '09CC
                            
                          </a>

                          <h4>12:00pm - 1:00pm Virtual Event</h4>
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
                     <h1> Friday:</h1>
                      {/* <br /> */}
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://www.columbiaafricon.com/"
                        >
                         19th Annual Columbia Africa Conference
                        </a>
                        <h4>
                          {" "}
                          Events Happening All Day Friday and Saturday. Click
                          link for more details
                        </h4>
                      </div>
                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://www.eventbrite.com/e/sandy10-resilience-equity-climate-justice-tickets-429208814117"
                        >
                        
                            SANDY+10 - Resilience, Equity, Climate Justice, The
                            Forum
                          
                        </a>
                        <h4> 8:00am - 6:00pm</h4>
                      </div>
                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://gsb-columbia-edu.zoom.us/j/94493164297#success"
                        >
                        Lang Center Virtual Office Hours
                        </a>
                        <h4> 1:15pm-2:15 pm</h4>
                      </div>
                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://gsb-columbia-edu.zoom.us/j/94493164297#success"
                        >
                        
                            {" "}
                            Real Estate: Argus Training Workshop with Josh Kahr
                          
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
                  <h1>  Saturday:</h1>
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            // href="https://milsteincenter.org/civicrm/event/info?reset=1&id=1073"
                          >
                          CBS Rubgy Vs Wharton
                          </a>

                          <h4>Randall's Island, Field 51 4:30 Kickoff</h4>
                        </div>
                      </div>
                      <br />
                      <div className="links">
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
