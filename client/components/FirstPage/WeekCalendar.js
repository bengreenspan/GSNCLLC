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
                <h4>11/14/22 - 11/19/22</h4>
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

                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=28573"
                          >
                            How to Ace Your Fit Interview by Career Management
                            Center
                          </a>

                          <h4>Geffen 620, 12:30am - 1:30pm</h4>
                        </div>
                      </div>
                      <br />
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/green/rsvp_boot?id=33013"
                          >
                            Climate Tech Demo Day
                          </a>

                          <h4>Kravis 490, 12:00am - 1:30pm</h4>
                        </div>
                      </div>
                      <br />
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=29213"
                          >
                            Toward a Data-Driven Society: From Business to
                            Policy to Social Vision
                          </a>

                          <h4>Geffen 310, 12:30pm - 1:30pm</h4>
                        </div>
                      </div>
                      <br />
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/ATC/rsvp_boot?id=33431"
                          >
                            CBS ATC "How Mobility Works: A Mechanics Course"
                          </a>

                          <h4>Geffen Loading Dock, 5:45pm - 7:30pm</h4>
                        </div>
                      </div>
                      <br />
                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/LANG/rsvp_boot?id=32606"
                          >
                            CBS Startup Week: Panel on Entrepreneurship and the
                            Fashion Industry
                          </a>

                          <h4>Geffen 520, 5:45pm - 7:30pm</h4>
                        </div>
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
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/CID/rsvp_boot?id=33215"
                          >
                            Columbia Innovation & Design Alumni Panel Series by
                            CBS Innovation & Design
                          </a>

                          <h4>12:00pm - 1:00pm</h4>
                        </div>
                      </div>
                      <br />

                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=29913"
                          >
                            CWiB Community Lunch
                          </a>

                          <h4>Geffen 520, 12:00pm - 1:45pm</h4>
                        </div>
                      </div>
                      <br />

                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/MMA/rsvp_boot?id=32940"
                          >
                            Sony Music Careers Panel by Media Management
                            Association
                          </a>

                          <h4>Kravis 430, 12:00pm - 1:30pm</h4>
                        </div>
                      </div>
                      <br />

                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/HCGD/rsvp_boot?id=32753"
                          >
                            CSIMA Talk with Jon Stenzler (Wolfe Research)
                          </a>

                          <h4>Kravis 680, 12:00pm - 1:00pm</h4>
                        </div>
                      </div>
                      <br />

                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/gma/rsvp_boot?id=33689"
                          >
                            Cover Letter Workshop by General Management
                            Association
                          </a>

                          <h4> 12:30pm - 1:30pm</h4>
                        </div>
                      </div>
                      <br />

                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/MILS/rsvp_boot?id=31811"
                          >
                            Distinguished Speaker Lunch with Onay Payne by The
                            Paul Milstein Center for Real Estate
                          </a>

                          <h4> Geffen 640, 12:30pm - 1:30pm</h4>
                        </div>
                      </div>
                      <br />

                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/MBAE23/rsvp_boot?id=33135"
                          >
                            Stories from Home (PPIL) by MBA Cluster E 23
                          </a>

                          <h4> Geffen 390, 12:30pm - 1:30pm</h4>
                        </div>
                      </div>
                      <br />

                      <div className="links">
                        <div>
                          <a
                            target="_blank"
                            href="https://groups.gsb.columbia.edu/FinStudies/rsvp_boot?id=32743"
                          >
                            Invesco Presentation: Tax-Advantaged Investing,
                            Tarun Gupta by Program for Financial Studies
                          </a>

                          <h4> Kravis 840, 6:00pm - 7:30pm</h4>
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
                            href="https://groups.gsb.columbia.edu/MMA/rsvp_boot?id=32939"
                          >
                            MMA NBC Universal Careers Panel by Media Management
                            Association
                          </a>

                          <h4>Geffen 430, 12:00pm – 1:00pm</h4>
                        </div>
                        <br />
                        <div className="links">
                          <div>
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/osa/rsvp_boot?id=31105"
                            >
                              CBS | well: Vinyasa Yoga
                            </a>

                            <h4>Geffen 440, 12:30pm - 1:30pm </h4>
                          </div>
                        </div>

                        <div className="links">
                          <div>
                            <a
                              target="_blank"
                              href="https://columbia.startuptree.co/event/s/Ti38fqrcVhdEDCRmTJEZDH/VC-Talk-on-Diversity-%2526-Investing-with-Elliott-Robinson-%252712"
                            >
                              VC Talk on Diversity & Investing with Elliott
                              Robinson '12
                            </a>

                            <h4>12:30pm - 1:30pm </h4>
                          </div>
                        </div>

                        <br />

                        <div className="links">
                          <div>
                            <a
                              target="_blank"
                              href="https://sanfordbernsteincenter.org/civicrm/event/info?id=260&reset=1"
                            >
                              Managing Stress to Enhance Performance as a Leader
                            </a>

                            <h4>Zoom, 12:30pm - 1:30pm </h4>
                          </div>
                        </div>

                        <br />

                        <div className="links">
                          <div>
                            <a
                              target="_blank"
                              href="https://sanfordbernsteincenter.org/civicrm/event/info?reset=1&id=258&noFullMsg=true"
                            >
                              Limitless with Chris Hemsworth Exclusive Screening
                              with Professor Modupe Akinola
                            </a>

                            <h4>Cooperman Commons,5:30pm </h4>
                          </div>
                        </div>

                        <br />

                        <div className="links">
                          <div>
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/LANG/rsvp_boot?id=29005"
                            >
                              Fireside Chat: Jon Stein '09, Founder of
                              Betterment by The Eugene Lang Entrepreneurship
                              Center
                            </a>

                            <h4>Kravis 640, 5:45pm - 6:45pm</h4>
                          </div>
                        </div>
                        <br />

                        <div className="links">
                          <div>
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=33376"
                            >
                              CWiB Friendsgiving Dinner by Columbia Women in
                              Business (CWIB)
                            </a>

                            <h4>Kravis 1040, 6:00pm - 8:00pm </h4>
                          </div>
                        </div>
                        <br />

                        <div>
                          {" "}
                          Rugby x Follies
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
                          href="https://groups.gsb.columbia.edu/LANG/rsvp_boot?id=29032"
                        >
                          Best Practices for Reforming the Healthcare Industry
                          by The Eugene Lang Entrepreneurship Center
                        </a>

                        <h4> Kravis 820, 12:00pm - 1:45pm</h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/MAC/rsvp_boot?id=33489
                          "
                        >
                          MAC Lunch! by Marketing Association of Columbia
                        </a>

                        <h4> Kravis 670, 12:15pm - 1:15pm</h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://columbia.startuptree.co/event/s/DujNSDGLwSdSxiSZopL9f9/CBS-Startup-Week%253A-Best-Practices-for-Reforming-the-Healthcare-Industry
                          "
                        >
                          Best Practices for Reforming the Healthcare Industry
                        </a>

                        <h4> 12:30pm - 1:45pm</h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/osa/rsvp_boot?id=33868
                          "
                        >
                          Fresh apples and cider from OSA
                        </a>

                        <h4> Kravis 470, 12:30pm - 1:45pm</h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/REA/rsvp_boot?id=31957
                          "
                        >
                          Visiting Speaker: Paul Kromidas, CEO & Co-Founder -
                          Summer
                        </a>

                        <h4> Kravis 640, 12:15pm - 1:45pm</h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=33766
                          "
                        >
                          Product Sense and Product Design Interview Workshop by
                          Technology Club
                        </a>

                        <h4> Geffen 640, 12:15pm - 1:45pm</h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=31927
                          "
                        >
                          Mastering Thank You Notes...American Style by Career
                          Management Center
                        </a>

                        <h4> Geffen 440, 12:30pm - 1:30pm</h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/RESI/rsvp_boot?id=29166
                          "
                        >
                          Executives in Residence Lunch & Learn with Douglas L.
                          Maine, Senior Advisor to Brown Brothers Harriman & Co
                        </a>

                        <h4> Kravis 840, 12:30pm - 1:30pm</h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                        https://groups.gsb.columbia.edu/green/rsvp_boot?id=33303
                          "
                        >
                          Alumni Careers Panel: Sustainability and the Energy
                          Transition by Green Business Club
                        </a>

                        <h4> Geffen 390, 12:30pm - 1:30pm</h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/microbrew/rsvp_boot?id=33534
                          "
                        >
                          Throwback Thursday by Micro-Brew Society
                        </a>

                        <h4> Arts and Crafts Beer Parlor, 5:45pm - 7:45pm</h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=33478
                          "
                        >
                          Why Has Japan Become So Cheap? Part 2 by Center on
                          Japanese Economy and Business
                        </a>

                        <h4> Online event, 7:00pm - 8:30pm</h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/seaba/rsvp_boot?id=33758
                          "
                        >
                          SEABA Fall Dinner @ Bilao by Southeast Asian Business
                          Association
                        </a>

                        <h4> Bilao (1437 1st Ave), 7:00pm - 9:00pm</h4>
                      </div>
                      <br />
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
                          href="
                          https://www.eventbrite.com/e/4th-annual-gabelli-funds-columbia-business-school-healthcare-symposium-tickets-428038904887
                          "
                        >
                          4th Annual Gabelli Funds - Columbia Business School
                          Healthcare Symposium
                        </a>
                        <h4>
                          {" "}
                          8:15am - 12:30pm The Paley Center For Media NYC{" "}
                        </h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/MILS/rsvp_boot?id=32948
                          "
                        >
                          Careers in Real Estate Workshop: Investment Sales by
                          The Paul Milstein Center for Real Estate
                        </a>
                        <h4> 11:30am - 12:30pm, Online</h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/TBC/rsvp_boot?id=33444
                          "
                        >
                          Brazil Club takes you to a BBQ at Fogo de Chão [Lunch]
                          by Brazil Club
                        </a>
                        <h4> 12:30am - 2:30pm</h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/MILS/rsvp_boot?id=32948
                          "
                        >
                          [Arts Society & CiD] Studio Afternoon | Jackson
                          Pollock by Arts Society
                        </a>
                        <h4> ArtsClub East Village Studio, 3:00pm - 5:00pm</h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/MILS/rsvp_boot?id=32948
                          "
                        >
                          Careers in Real Estate Workshop: Investment Sales by
                          The Paul Milstein Center for Real Estate
                        </a>
                        <h4> 11:30am - 12:30pm, Online</h4>
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
