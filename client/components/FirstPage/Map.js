import React, { useMemo } from "react";
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

const Map = () => {
  

  const center = useMemo(() => ({ lat: 40.7207644, lng: -73.991498 }), []);

  if (!isLoaded) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        <div data-aos="fade-right">
        <Box sx={{ display: "flex", justifyContent: "center", pb: 8 }}>
          <Typography variant="h1" marginTop={13}>
            <div className="white-background"> 
            <Typography sx={{p:3, fontSize: 72, fontColor: "#0487cd"}}>
            Current Partner Locations
            </Typography>
            </div>

          </Typography>
        </Box>
        </div>
        <div data-aos="fade-left">
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerClassName="map-container"
        >
          <Marker position={{ lat: 40.7288053, lng: -73.9918678 }} />
          <Marker
            position={{ lat: 40.7207644, lng: -73.991498 }}
            title={"granny"}
          />
          <Marker
            position={{ lat: 40.720323, lng: -73.9915795 }}
            icon={{
              scaledSize: new window.google.maps.Size(35, 35),
            }}
            
          />
        </GoogleMap>
        </div>
      </div>
    );
  }
};

export default Map;

<LockOutlinedIcon fontSize="small" />;
