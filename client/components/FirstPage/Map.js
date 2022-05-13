import React, { useMemo } from "react";
import * as BS from "react-bootstrap";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  withScriptjs,
  withGoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Aos from "Aos";
// import "aos/dist/aos.css"
import { Parallax, Background } from "react-parallax";
import Za from "./CustomerComp/Za";
import Mc from "./CustomerComp/Mc";

const Map = () => {
  const { isLoaded } = useLoadScript({

  });

  const center = useMemo(() => ({ lat: 40.7412358, lng: -73.9988867 }), []);

  if (!isLoaded) {
    return <div>loading...</div>;
  } else {
    return (









      
      <BS.Container>
        <div data-aos="fade-up">
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 10,
              pr: 14,
              pb: 5,
            }}
          >
            <BS.Row>
              <section>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
           
                    pr: 5,
                  }}
                >
                  <div className="sticker">
                    {" "}
                    <GoogleMap
                      zoom={13}
                      center={center}
                      mapContainerClassName="map-container"
                    >
                      <Marker
                        position={{ lat: 40.7507647, lng: -73.9826266 }}
                      />
                      <Marker
                        position={{ lat: 40.7641359, lng: -73.9904049 }}
                      />
                      <Marker
                        position={{ lat: 40.7607937, lng: -73.9717539 }}
                      />
                      <Marker
                        position={{ lat: 40.7630212, lng: -73.9790517 }}
                      />
                      <Marker
                        position={{ lat: 40.7440062, lng: -73.9994829 }}
                      />
                      =
                      {/* <Marker position={{ lat: 40.743681, lng: -73.998775 }} /> */}
                      <Marker
                        position={{ lat: 40.7207183, lng: -73.9978387 }}
                      />
                      <Marker position={{ lat: 40.725128, lng: -73.996547 }} />
                      <Marker
                        position={{ lat: 40.7439122, lng: -74.0327507 }}
                      />
                      <Marker
                        position={{ lat: 40.7285051, lng: -73.9911129 }}
                      />
                      <Marker
                        position={{ lat: 40.7288053, lng: -73.9818678 }}
                      />
                      <Marker
                        position={{ lat: 40.7279935, lng: -74.0024069 }}
                      />
                      <Marker
                        position={{ lat: 40.7207644, lng: -73.991498 }}
                        title={"granny"}
                      />
                      <Marker
                        position={{ lat: 40.720323, lng: -73.9915795 }}
                        icon={{
                          scaledSize: new window.google.maps.Size(3, 3),
                        }}
                      />
                    </GoogleMap>
                  </div>
                </Box>
              </section>
            </BS.Row>
            <BS.Col sm>
              <div data-aos="fade-down">
                {/* <Typography variant="h3" component="h3" sx={{ pb: 8 }}> */}
                  <Typography
                    variant="h2"
                    sx={{
                      pb: 12,

                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="fontbold">Partner Locations</div>
                  {/* </Typography> */}

                  <br />
                  <p className="font1">
                    As our expansion continues outside of Lower Manhattan, we
                    are still committed to the highest levels of service. If you
                    are outside of our current partner boundries, we may still
                    be interested in seeing working with you.
                  </p>
                </Typography>
              </div>
            </BS.Col>
          </Container>
        </div>
      </BS.Container>
    );
  }
};

export default Map;


