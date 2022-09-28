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
        <Box sx={{ pt: 5, pb: 5, display: "flex", justifyContent: "center" }}>
          <Typography component="h1" variant="h2">
            <div
              className="fontbold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img src="/HH.png" height="250" />
            </div>
          </Typography>
        </Box>
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
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Typography
              variant="h3"
              className="white-background"
              sx={{
                pt: 3,
                pl: 3,
                pr: 3,
                pb: 3,
                justifyContent: "center",
              }}
            >
              <div className="fontbold">
                <h4>09/25/22 - 10/01/22</h4> Weekly Events by Haas
                <br />
                <br />
                <h1>Sunday 09/25/22:</h1>
                {/* <br /> */}
                <h1>Monday 09/26/22: </h1>
                <h1>Tuesday 09/27/22:</h1>
                {/* <br /> */}
                <div className="date">
                  <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=29322"
                  >
                    <h2>Careers in Real Estate Zoom</h2>
                  </a>
                  <h4>Geffin 390 12:30pm-1:30pm (Lunch Provided)</h4>
                  <br />
                  <a
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
                  </h2>
                </div>
                <br />
                <h1>Wednesday 09/28/22:</h1>
                {/* <br /> */}
                <div className="date">
                  {" "}
                  <h2> Rugby + Fintech/Blockchain Club Happy Hour</h2>
                  <h4>Jake's Dilemma 8:00pm-?? (Open bar)</h4>
                </div>
                <br />
                <h1>Thursday 09/29/22:</h1>
                {/* <br /> */}
                <div className="date">
                  <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=28410"
                  >
                    <h2>Social Enterprise Summer Fellows Project Presentations</h2>
                  </a>
                  <h4>Geffin 440 12:00pm-1:45pm (Lunch Provided)</h4>
                  <br />
                  <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/RESI/rsvp_boot?id=29145"
                  >
                    <h2>
                      {" "}
                   "The Value of Networking"
                    </h2>
                  </a>
                  <h2>
                    <h4>Geffin 540 12:30pm-1:30pm (Lunch Provided)</h4>
                  </h2>
                  <br />
                  <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/tech/rsvp_boot?id=32126"
                  >
                    <h2>
                      {" "}
                  Tech Club: Summer Internship Q+A
                    </h2>
                  </a>
                  <h2>
                    <h4>Kravis 840 12:30pm-1:30pm (Lunch Provided)</h4>
                  </h2>
                </div>
                <br />
                <h1>Friday 09/30/22:</h1>
                {/* <br /> */}
                <h1>Saturday 10/01/22:</h1>
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
