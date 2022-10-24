import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import Badge from "@mui/material/Badge";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const isWeekend = (date) => {
  const day = date.day();
  return day === 0 || day === 6;
};

const Monthly = () => {
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  const [value, setValue] = React.useState(dayjs(new Date()));

console.log(highlightedDays)

  return (
    <BS.Container>
      <Box
        sx={{
          pt: 13,
          display: "flex",
          justifyContent: "left",
        }}
      >
        {/* <div>{value}</div> */}
        <BS.Col lg={6} md={6} sm={6} xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              orientation="portrait"
              openTo="day"
              value={value}
              // shouldDisableDate={isWeekend}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              renderDay={(day, _value, DayComponentProps) => {
                const isSelected =
                  !DayComponentProps.outsideCurrentMonth &&
                  highlightedDays.indexOf(day.date()) >= 0;

                return (
                  <Badge
                    key={day.toString()}
                    overlap="circular"
                    badgeContent={isSelected ? <EventAvailableIcon/> : undefined}
                  >
                    <PickersDay {...DayComponentProps} />
                  </Badge>
                );
              }}
            />
          </LocalizationProvider>

          {/* <BS.Row></BS.Row> */}
        </BS.Col>
      </Box>
    </BS.Container>
  );
};
export default Monthly;
