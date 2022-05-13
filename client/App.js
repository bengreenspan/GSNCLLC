import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";
import Footer from "./components/Footer";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material";
import Theme from "./Theme";

const App = () => {
  return (
    <>

      <Navbar />
      <ThemeProvider theme={Theme}>
      <Container>
 
        <Routes />
 
      </Container>
      <Container>
        <Footer />
      </Container>
    </ThemeProvider>
    </>
  );
};

export default App;

