import * as React from 'react';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import { Divider } from "@mui/material";


const Who = () => {
    return (
        <Container>
          {/* <ThemeProvider theme={theme}> */}
            <Box sx={{ pl: 1 }}>
              <Box sx={{ pt: 4, pb: 3, display: "flex", justifyContent: "center" }}>
                <Typography component="h1" variant="h2">
                Who Are We
                </Typography>
              </Box>
              <Divider sx={{ m: 0, p: 0 }} />
              <Box sx={{ pb: 4, pl: 2, pt: 3 }}>
              <Box sx={{ pt: 4, pb: 3, display: "flex", justifyContent: "center" }}>
              <img src="/cam.jpeg" height={150} />
              <img src="/nate.jpeg" height={150} />
              </Box>
                <Typography component="h4" variant="subtitle1">
                  {" "}
                 We are Nate Gallagher and Cam Surgrue. Two entrepreneurial professionals 
                 living in the lower east side of New York City. We have safely and securley transport millions of dollars across many locations in Manhattan. 
                 We are looking for further opportunites to expand our operation with growing local businesses. Contact us down below.
                </Typography>
              </Box>
            </Box>
          {/* </ThemeProvider> */}
        </Container>
      );
}

export default Who