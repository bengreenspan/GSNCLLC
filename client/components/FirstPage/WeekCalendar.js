import React from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
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
                <h4>10/10/22 - 10/14/22</h4> Weekly Events
                <br />
                <br />
                {/* <h1>Sunday 09/25/22:</h1> */}
                {/* <br /> */}
                <h1>Monday 10/10: </h1>

                <div className="date">
                <div className="links">
                  <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/vcc/rsvp_boot?id=32333"
                  >
                    <h2>Technology Pioneers Series: Fireside Chat with Alan Patricof</h2>
                  </a>
                  </div>
                  {/* <h4>20 person limit</h4> */}
                  <h4>Cooperman Commons, Geffen Hall, 12:00pm-1:00pm </h4>
            
</div>
      <br />


                <div className="date">
                <div className="links">
                  <a
                    target="_blank"
                    href="https://www.eventbrite.com/e/the-innovation-mindset-eight-essential-steps-to-transform-any-industry-tickets-417241991027?lang=en-us&locale=en_US&status=30&view=listing"
                  >
                    <h2>The Innovation Mindset: Eight Essential Steps to Transform Any Industry</h2>
                  </a>
                  </div>
                  {/* <h4>20 person limit</h4> */}
                  <h4>Avery Hall, Wood Auditorium 6:30pm</h4>
            
</div>
      <br />


      <div className="date">
                <div className="links">
                  <a
                    target="_blank"
                    href="https://www.publichealth.columbia.edu/public-health-now/events/lenapehoking-indigenous-epistemologies-and-idea-university"
                  >
                    <h2>Lenapehoking: On Indigenous Epistemologies and the Idea of the University</h2>
                  </a>
                  </div>
                  {/* <h4>20 person limit</h4> */}
                  <h4>Allan Rosenfield Building, 722 West 168th St. 3:30pm-5:00pm </h4>
            
</div>
      <br />


      <div className="date">
                <div className="links">
                  <a
                    target="_blank"
                    href="https://www.arch.columbia.edu/events/2752-raven-chacon?utm_source=newsletter&utm_medium=email&utm_campaign=highlights100722"
                  >
                    <h2>A lecture by Raven Chacon, composer, performer and installation artist from the Navajo Nation</h2>
                  </a>
                  </div>
                  {/* <h4>20 person limit</h4> */}
                  <h4>Allan Rosenfield Building, 722 West 168th St. 3:30pm-5:00pm </h4>
            
</div>
      <br />

      <div className="date">
      <div className="links">
                  <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=29831"
                  >
                    <h2> Tech Club: Product Management Day in the Life</h2>
                  </a>
                  </div>
                  <h2>
                    <h4>Geffin 620 6:00pm-7:30pm </h4>
                  </h2>
                  </div>
                  <br />
                  {/* <div className="date"> */}
{/*          
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
                  <br /> */}

                  {/* <a
                    target="_blank"
                    href="https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=29974 "
                  >
                    <h2>Tech Club: Startups 101</h2>
                  </a>
                  <h2>
                    <h4>Geffen 440 6:00pm - 7:30pm</h4>
                  </h2> */}
                {/* </div> */}
    
                <h1>Tuesday 10/11:</h1>
                {/* <br /> */}
                <div className="links">
                <div className="date">
                  <a
                    target="_blank"
                    href="https://milsteincenter.org/civicrm/event/info?reset=1&id=1073

                    "
                  >
                    <h2>Distinguished Speaker Series with Matthew Lustig: Real Estate IB, Lazard</h2>
                  </a>

                  <h4>Kravis 840 12:30pm-1:30pm (Lunch Provided)</h4>
                  </div>
                  {/* <br /> */}

                  
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
                <h1>Wednesday 10/12:</h1>
                {/* <br /> */}

                <div className="date">
                <div className="links">
                <a
                    target="_blank"
                    href="https://columbiauniversity.zoom.us/meeting/register/tJYvcO-oqDopEtzEu3OvdPKOyKWq8ubj7IP4%20 "
                  >
                    <h2>CU there! Presents: The Art and Science of Networking </h2>
                  </a>
                  </div>
                  <h4> Virtual, 8:00pm - 9:00pm </h4>
                  </div>

                  <br />

                  <div className="date">
                  {" "}
                  <h2> Rugby x Hispanic Business Assocation (HBA)</h2>
                  <h4>Jake's Dilemma 8:30pm-?? (Open bar)</h4>
             </div>
             <br />


                <h1>Thursday 10/13:</h1>
                <h1>Friday 10/14:</h1>
   
                <div className="date">
                <div className="links">
                <a
                    target="_blank"
                    href="https://columbiasocialenterprise.org/civicrm/event/register?id=866&reset=1"
                  >
                    <h2>21st Annual Social Enterprise Conference, Capital for Good, Tamer Institute</h2>
                  </a>
                  <h4> Cooperman Commons, 8am - 6:30pm </h4>
                  <h4> Event free with code: C4G100off </h4>
                  </div>
                  </div>

                  <br />
                <h1>Saturday 10/15:</h1>
                <Typography></Typography>
              </div>
            </Typography>
          </div>
        </Box>
        <br /> <br /> <br /> <br /> <br /> <br />
        {/* <Box
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
        </Box> */}
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
