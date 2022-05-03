import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Aos from "Aos";
import { Divider } from "@mui/material";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{pl: 10, pr: 10}}>
        <Box sx={{ display: "flex", justifyContent: "center", pb: 12 }}>
            <Typography variant="h4" marginTop={13} sx={{ color: "white" }}>
              <div className="font">
                <button className="white-background" >FAQ</button>
              </div>
            </Typography>
          </Box>
      <div data-aos="fade-up"
    data-aos-duration="2000">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '38%', flexShrink: 0 }}>
          What is the cost structure to set up an ATM?
          </Typography>
     
          <Typography sx={{ color: 'text.secondary' }}>Two Choices</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Typography>
          <Divider sx={{ mb: 3, p:0 }} />
           Businesses can opt to either pay zero upfront cost and share in the transaction fee, 
           <br/>
           or purchase the ATM through GSNC LLC and receive the full transaction fee from usage
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>What is the transaction fee to the customer?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Divider sx={{ mb: 3, p:0 }} />
The standard transaction fee is typically between $2 and $4
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>How long does it take to set up?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Divider sx={{ mb: 3, p:0 }} />
Your state of the art ATM can be installed by our professionals within a couple of days
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>How frequently will our ATM be serviced?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Divider sx={{ mb: 3, p:0 }} />
           Our local team will always be monitoring the reserves, refilling when approiate
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>


    </Container>
  );
}