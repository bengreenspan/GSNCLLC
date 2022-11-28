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

{
  /* <div>
<a
  target="_blank"
  href="https://groups.gsb.columbia.edu/MMA/rsvp_boot?id=32939"
>
  MMA NBC Universal Careers Panel
  <p style={{fontWeight:100}}>
   by Media Management
  Association
  </p>
</a>

<h4 style={{fontStyle:"italic"}}>Geffen 430, 12:00pm – 1:00pm</h4>
</div>
<br /> */
}

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
                <h4>11/28/22 - 12/03/22</h4>
                <br />
                <BS.Row>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      className="fontbold"
                    >
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="monday"></span>
                        Monday
                      </h1>
                      <br />

                      <h2>All Day:</h2>

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                         
                            "
                        >
                          World Cup Streaming
                          {/* <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Media Management Association
                            </p> */}
                          <h4 style={{ fontWeight: 100 }}>Kravis 470</h4>
                        </a>
                        <br />

                        <div
                        // className="lunch happenings"
                        // data-aos="fade-left"
                        // data-aos-duration="1000"
                        >
                          <h2>Lunch Happenings:</h2>
                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                            https://groups.gsb.columbia.edu/MMA/rsvp_boot?id=37704
                            "
                            >
                              MMA: Podcasting and the Future of Audio
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Media Management Association
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Kravis 410, 12:30pm – 1:30pm
                            </h4>
                          </div>
                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=38077"
                            >
                              CMC Advising: Consulting with Tricia Baione
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Career Management Center
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Geffen 570, 12:30pm – 1:30pm
                            </h4>
                          </div>
                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="
                            https://groups.gsb.columbia.edu/CHAZ/rsvp_boot?id=33429
                            "
                            >
                              Ask Me Anything: Working Abroad in Africa
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by The Chazen Institute
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Geffen 540, 12:30pm – 1:30pm (PPIL, 100+
                              registered)
                            </h4>
                          </div>

                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="https://groups.gsb.columbia.edu/FLC/rsvp_boot?id=38195"
                            >
                              Financial Literacy Club Bake Sale
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Financial Literacy Club
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              4th Floor Student Lounge Kravis, 12:00pm – 3:00pm
                            </h4>
                          </div>

                          <hr />
                          <div
                            className="afternoon"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                          >
                            <h2 style={{ textDecoration: "none" }}>
                              Afterclass Happenings:
                            </h2>
                            <br />

                            <div className="links">
                              <a
                                target="_blank"
                                href="
                            https://groups.gsb.columbia.edu/DEAN/rsvp_boot?id=38177
                          "
                              >
                                Public Pensions and Retirement Security in the
                                U.S
                                <p
                                  style={{
                                    fontStyle: "italic",
                                    fontWeight: 100,
                                  }}
                                >
                                  by Dean's Office
                                </p>
                              </a>

                              <h4 style={{ fontWeight: 100 }}>
                                Kravis 880, 3:30pm – 5:15pm
                              </h4>
                            </div>
                          </div>
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
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="tuesday"></span>
                        Tuesday
                      </h1>

                      <br />
                      <div>
                        <h2>Lunch Happenings:</h2>
                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/european/rsvp_boot?id=38236
                            "
                          >
                            Summer Internships in EU/UK - 2nd Years Panel
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by European Society
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 620, 12:00pm – 1:30pm (25+ registered)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/fbc/rsvp_boot?id=38016
                            "
                          >
                            Family Business Lunch Chats
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Family Business Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 830, 12:00pm – 1:30pm (25+ registered)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://www.eventbrite.com/e/leading-transformation-and-innovation-in-the-life-sciences-industry-tickets-433034175877
                            "
                          >
                            Leading Transformation and Innovation in the Life
                            Sciences Industry
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              By The Healthcare and Pharmaceutical Management
                              Program
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 380, 12:00pm – 1:00pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/StudGov/rsvp_boot?id=38024
                            "
                          >
                            Bagel and Coffee Pass Out event
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Student Government Executive Board
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 470, 12:00pm – 1:00pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/FinStudies/rsvp_boot?id=33500
                            "
                          >
                            No Free Lunch seminar
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Program for Financial Studies
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 420, 12:15pm – 1:15pm (50+ registered)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=38115
                            "
                          >
                            (Product) Strategy Case Interview Workshop
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Technology Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 390, 12:15pm – 1:45pm (50+ registered)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=32843
                            "
                          >
                            Ask Me Anything – Careers in Venture Capital with
                            Will Szczerbiak ’15, Partner at Greycroft
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Career Management Center
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 440, 12:30pm – 1:30pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/MMA/rsvp_boot?id=33833
                            "
                          >
                            MMA Lunch & Learn: Music, Audio & Tech
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Media Management Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 540, 12:30pm – 1:30pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/PEC/rsvp_boot?id=38051
                            "
                          >
                            Visiting Speaker: Stuart J. Boesky - CEO & Founder
                            of Pembrook
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Private Equity Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 670, 12:30pm – 1:30pm (50+ registered)
                          </h4>
                        </div>
                        <br />
                      </div>
                      <hr />
                      <div
                        className="afternoon"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        <h2 style={{ textDecoration: "none" }}>
                          Afterclass Happenings:
                        </h2>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CEO/rsvp_boot?id=33874
                          "
                          >
                            CBS Startup Pitch Night
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Columbia Entrepreneurs Organization
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 670, 6:00pm – 8:00pm (50+ registered)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/RDIG/rsvp_boot?id=38107
                          "
                          >
                            Distressed Investing Case Study with Professor
                            Michael Gatto
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Restructuring and Distressed Investing Group
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 520, 6:00pm – 7:30pm (25+ registered)
                          </h4>
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
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        {" "}
                        <span id="wednesday"></span>
                        Wednesday
                      </h1>
                      <br />
                      <h2>Lunch Happenings:</h2>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                            https://groups.gsb.columbia.edu/EXECED/rsvp_boot?id=38007
                          "
                        >
                          Advancing to the Next Level of Leadership
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Executive Education
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Virtual, 11:30pm – 12:00pm (25+ registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/osa/rsvp_boot?id=29119
                          "
                        >
                          CBS | well: Quiet Group Study Room
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Office of Student Affairs
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 390, 12:00pm – 1:45pm
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/osa/rsvp_boot?id=29492
                          "
                        >
                          CBS | well: Meditation Space
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Office of Student Affairs
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 380, 12:00pm – 1:45pm
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/osa/rsvp_boot?id=28225
                          "
                        >
                          CBS | well: Quiet Group Study Room
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Office of Student Affairs
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 440, 12:30pm – 1:30pm
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://sanfordbernsteincenter.org/civicrm/event/info?id=260&reset=1
                          "
                        >
                          Managing Stress to Enhance Performance as a Leader
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Bernstein Center for Leadership and Ethics
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Virtual, 12:30pm – 1:30pm
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/MILS/rsvp_boot?id=32969
                          "
                        >
                          Careers in Real Estate Workshop: REITs
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Milstein Center for Real Estate
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Virtual, 12:30pm – 1:30pm
                        </h4>
                      </div>

                      <hr />
                      <div
                        className="afternoon"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        <h2 style={{ textDecoration: "none" }}>
                          Afterclass Happenings:
                        </h2>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                          https://groups.gsb.columbia.edu/DEI/rsvp_boot?id=33224
                          "
                          >
                            Consortium Fellows Holiday Social
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Diversity, Equity and Inclusion Office
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 1040, 5:25pm – 8:00pm (25+ registered)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://www.eventbrite.com/e/biotech-pharma-landscape-strategy-ma-financing-digital-technologies-tickets-467392512587
                          "
                          >
                            Biotech-Pharma Landscape: Strategy, M&A, Financing,
                            & Digital Technologies
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              By The Healthcare and Pharmaceutical Management
                              Program
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 640, 6:00pm – 7:00pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/gourmet/rsvp_boot?id=38520
                          "
                          >
                            Taste of Culture: Japanese Ramen & Sake Night
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Gourmet Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            East Village, 7:00pm – 10:30pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/RFC/rsvp_boot?id=31636
                          "
                          >
                            Healthcare Industry Association x Rugby Networking
                            Event
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Men's Rugby Football Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Jake's Dilemma, 8:30pm – 11:30pm
                          </h4>
                        </div>
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
                      <br />

                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="thursday"></span>
                        Thursday
                      </h1>

                      <br />
                      <h2>Lunch Happenings:</h2>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CSIMA/rsvp_boot?id=38447
                          "
                        >
                          How Machine Learning Can Improve Investment Management
                          Decisions
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Columbia Student Investment Management
                            Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Virtual, 12:00pm – 1:00pm
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/hcia/rsvp_boot?id=38168
                          "
                        >
                          Ask Me Anything: Biotech / Pharma Industry
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Health Care Industry Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 680, 12:00pm – 1:00pm
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/mca/rsvp_boot?id=32950
                          "
                        >
                          Advanced Casing and Fit
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Management Consulting Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 380, 12:00pm – 1:30pm (50+ registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/GFEP/rsvp_boot?id=32754
                          "
                        >
                          Mentorship Program Information Session
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Global Family Enterprise Program
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 540, 12:30pm – 1:30pm
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/MILS/rsvp_boot?id=28375
                          "
                        >
                          Distinguished Real Estate Speaker Series featuring
                          Onay Payne
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Milstein Center for Real Estate (25+ registered)
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 390, 12:30pm – 1:30pm
                        </h4>
                      </div>

                      <hr />
                      <div
                        className="afternoon"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        <h2 style={{ textDecoration: "none" }}>
                          Afterclass Happenings:
                        </h2>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/GFEP/rsvp_boot?id=37953
                          "
                          >
                            BBH Family Business Leadership Speaker Series:
                            Andrew Gundlach '01
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Global Family Enterprise Program
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 1020, 5:00pm – 8:00pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/StudGov/rsvp_boot?id=32901
                          "
                          >
                            December CBS Social
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              Hosted by EXBO, Microbrew, and Student Government
                              Executive Board
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 310, 5:45pm – 7:45pm (150+ registered)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/gourmet/rsvp_boot?id=38556
                          "
                          >
                            Taste of Culture: German Biergarten
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Gourmet Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Loreley Beer Garden, 6:00pm – 8:00pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/acc/rsvp_boot?id=33760
                          "
                          >
                            The Nutcracker at New York City Ballet
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Arts Society
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Lincoln Center, 7:00pm – 9:00pm (Waitlist)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/acc/rsvp_boot?id=38049
                          "
                          >
                            Dance Show at BAM: LOVETRAIN2020
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Arts Society
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Peter Jay Sharp Building at BAM, 7:30pm – 9:30pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/clusterq/rsvp_boot?id=38178
                          "
                          >
                            Pink Party
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Cluster Q
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Rebar Chelsea, 9:00pm – 2:00am
                          </h4>
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
                      // className="fontbold"
                    >
                      <br />

                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="friday"></span>
                        Friday
                      </h1>

                      <br />
                      <h2>Lunch Happenings:</h2>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/mca/rsvp_boot?id=33185
                          "
                        >
                          Bain BCG Deloitte Kearney McK Strategy& AMA Panel
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Management Consulting Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 390, 12:00pm – 1:00pm (50+ registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/basketball/rsvp_boot?id=33407
                          "
                        >
                          CBS vs Stern Annual Basketball Game at Barclays Center
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Columbia Basketball Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Barclays Center, 12:00pm – 2:30pm (100+ registered,
                          $30 Ticket)
                        </h4>
                      </div>

                      <hr />
                      <div
                        className="afternoon"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        <h2 style={{ textDecoration: "none" }}>
                          Afternoon Happenings:
                        </h2>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/follies/rsvp_boot?id=32484
                          "
                          >
                            Follies Live Show (First Year Audience)
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Follies
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Peter Jay Sharp Theatre at Symphony Space, 6:00pm –
                            8:00pm (150+ registered, $35 Tickets)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/microbrew/rsvp_boot?id=33781
                          "
                          >
                            MicroBrew x Follies Mid-Show Social
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Micro-Brew Society
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Dive Bar 96, 8:00pm – 10:00pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/follies/rsvp_boot?id=32485
                          "
                          >
                            Follies Live Show (Second Year Audience)
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Follies
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Peter Jay Sharp Theatre at Symphony Space, 9:00pm –
                            11:00pm (150+ registered, $35 Tickets)
                          </h4>
                        </div>
                      </div>

                      <br />
                    </div>
                  </BS.Col>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      // data-aos-offset="200"
                      className="fontbold"
                    >
                      <br />
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="saturday"></span>
                        Saturday & Sunday
                      </h1>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                            https://groups.gsb.columbia.edu/DEI/rsvp_boot?id=32678
                          "
                        >
                          BBSA/HBA-Women of Color Retreat
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Diversity, Equity and Inclusion Office
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 870, 11:00am – 3:00pm (25+ registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/microbrew/rsvp_boot?id=38127
                          "
                        >
                          Wild East Brewing Tour
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Micro-Brew Society
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Wild East Brewing, 12:00pm – 2:00pm
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=38321
                          "
                        >
                          Shuffle Boarding with Tech Club!
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Technology Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Royal Palms Shuffleboard Club, 2:00pm - 4:00pm ($38
                          Tickets)
                        </h4>
                      </div>
                      <hr />

                      <div
                            className="afternoon"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                          >
                          

                      <h2 style={{ textDecoration: "none" }}>Sunday:</h2>

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/GCS/rsvp_boot?id=38358
                          "
                        >
                          Fireside Chat with Alex at Qiming VC
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Greater China Society
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Virtual, 10:00pm - 11:00pm
                        </h4>
                      </div>
                      </div>
                      <br />
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
