import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Form from "./FirstPage/Form";
import { Link } from "react-router-dom";
import Aos from "aos";
import * as BS from "react-bootstrap";

const ContactUs = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

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

            justifyContent: "center",
          }}
        >
          <div
            className="fontbold"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Typography
              variant="h3"
              className="white-background"
              sx={{
                pt: 3,
                pl: 3,
                pr: 20,
                pb: 3,
                justifyContent: "center",
              }}
            >
              <div className="fontbold">
Full Calendar
                <br />
                <br />
                {/* <h1>Sunday 09/25/22:</h1> */}
                {/* <br /> */}
                <h1>Monday 10/03: </h1>
                <div className="date">
                  <a
                    target="_blank"
                    href="https://www.eventbrite.com/e/transforming-the-healthcare-industry-with-digital-health-solutions-tickets-408083236947"
                  >
              
               <div className="Title">
                    <h2>Healthcare Leadership Series</h2>
                    </div>
                  </a>
                  <h4>20 person limit</h4>
                  <h4>Geffin 380 12:00pm-1:00pm (Lunch Provided)</h4>
            
                  </div>
                  <br/>
                  <div className="date">
                  <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/MILS/rsvp_login?id=28898&private_event=1"
                  >
                    <h2> Entrepreneurship in Real Estate</h2>
                  </a>
                  <h2>
                    <h4>Geffin 490 12:30pm-1:30pm (Lunch Provided)</h4>
                  </h2>
                  <br />

                  <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/PEP/rsvp_boot?id=31174"
                  >
                    <h2> KKR PE Competition Kick-off</h2>
                  </a>
                  <h2>
                    <h4>Kravis 840 and 870 5:30pm - 7:00pm</h4>
                  </h2>
                  <br />

                  <a
                    target="_blank"
                    href="https://www.eventbrite.com/e/opportunities-in-healthcare-investing-tickets-400970231757"
                  >
                    <h2>Opportunities in Healthcare Investing</h2>
                  </a>
                  <h2>
                    <h4>Kravis 820 6:00pm - 7:00pm</h4>
                  </h2>
                  <br />

                  {/* <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=29974 "
                  >
                    <h2>Tech Club: Startups 101</h2>
                  </a>
                  <h2>
                    <h4>Geffen 440 6:00pm - 7:30pm</h4>
                  </h2> */}
                </div>
                <br />
                <h1>Tuesday 10/04:</h1>
                {/* <br /> */}
                <div className="date">
                  <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/rsvp?id=29046
                    "
                  >
                    <h2>Chazen Global Markets Update</h2>
                  </a>
                  <h4>Geffin Commons 12:00pm-1:45pm (Lunch Provided)</h4>
                  <br />

                  
                  {/* <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=29322"
                  >
                    <h2>
                      {" "}
                      Center on Japanese Economy and Business Association
                    </h2>
                  </a>
                  <h2>
                    <h4>Geffin 440 6:00pm-7:30pm (Sushi + Sake Provided)</h4>
                  </h2> */}
                </div>
                <br />
                <h1>Wednesday 10/05:</h1>
                {/* <br /> */}

                <div className="date">
                <a
                    target="_blank"
                    href="https://cjeb-100522.eventbrite.com"
                  >
                    <h2>Why Has Japan Become So “Cheap"</h2>
                  </a>
                  <h4>Geffin Commons 6:00pm-7:30pm </h4>
                  <br />



       
                  {" "}
                  <h2> Rugby + Microbrew Happy Hour</h2>
                  <h4>Jake's Dilemma 8:30pm-?? (Open bar)</h4>
                </div>
                <br />


                <h1>Thursday 10/06:</h1>
                {/* <br /> */}
                <div className="date">
                  {/* <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=28410"
                  > */}
                    <h2>
                     Career Workshop, Mapping your Social Impact Career
                    </h2>
                  {/* </a> */}
                  <h4>Geffin 430 12:00pm-1:45pm (Lunch Provided)</h4>
                  <br />
                  <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/rsvp?id=29148"
                  >
                    <h2> Private Equity: The Portfolio Company Perspective</h2>
                  </a>
                  <h2>
                    <h4>Kravis 640 12:30pm-1:30pm (Lunch Provided)</h4>
                  </h2>
                  <br />
                  <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/tech/rsvp_boot?id=32126"
                  >
                    <h2> Tech Club: Open Lunch - Networking and Job Search Best Practices</h2>
                  </a>
                  <h2>
                    <h4>Kravis 830 12:00pm-1:30pm (Lunch Provided)</h4>
                  </h2>
                  <br />
                  <a
                    target="_blank"
                    href=" https://events.columbia.edu/cal/event/showEventMore.rdo "
                  >
                    <h2> Awakening Our Democracy: What is At Stake in the Midterm Elections? </h2>
                  </a>
                  <h2>

                    <h4>Pulizter Hall 12:00pm – 1:30pm</h4>
                  </h2>
                </div>
                <br />
                <h1>Friday 10/07:</h1>
                {/* <br /> */}
                <h1>Saturday 10/08:</h1>
                <Typography></Typography>
              </div>
            </Typography>
          </div>
        </Box>
        <br /> <br /> <br /> <br /> <br /> <br />
        <Box
          sx={{
            pt: 3,
            pl: 3,
            pr: 3,
            pb: 3,
            // justifyContent: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="p"
            className="white-background"
            sx={{
              pt: 3,
              pl: 3,
              pr: 3,
              pb: 3,
              justifyContent: "left",
            }}
          >
            <div className="fontbold">
              {" "}
              Interested in Contributing?
              <br />
              <br />
              <Typography>
                <h4>Email us at</h4>
                <h4>Bgreenspan24@gsb.columbia.edu</h4>
              </Typography>
            </div>
          </Typography>
        </Box>
      </Container>
    </BS.Container>
  );
};

export default ContactUs;
