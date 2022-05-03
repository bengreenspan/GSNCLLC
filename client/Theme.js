import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      light: "#D8F1F6",
      main: '#cd4a04',
      dark: "#196170",
      contrastText: "#fff",
    },
    secondary: {
      //secondary is pink
      light: "#ff80ab",
      main: "#C54B7B",
      dark: "#a62859",
      contrastText: "#fff",
    },
    orangey: {
      light: "#edb482",
      main: "#F57D52",
      dark: "#db5321",
      contrastText: "#fff",
    },
    yellow: {
      light: "#f5dda6",
      main: "#FEBF30",
      dark: "#e09c00",
      contrastText: "#fff",
    },
    braun: {
      main: "#271F1C",
    },
    grey: {
      main: "#837873",
      dark: "#383432",
    },
    white: {
      main: "#FFFFFF",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "subtitle1",
          },
          style: {
            fontSize: 15,
          },
        },
        {
          props: {
            variant: "h2",
          },
          style: {
            fontSize: 60,
          },
        },
        {
          props: {
            variant: "h3",
          },
          style: {
            fontSize: 40,
            marginBottom: 10,
          },
        },
        {
          props: {
            variant: "link",
          },
          style: {
          color:"primary"
          },
        },
        {
          props: {
            variant: "h11",
          },
          style: {
            fontSize: 40,
            marginBottom: 10,
          },
        },
      ],
    },
  },
});

export default theme;
