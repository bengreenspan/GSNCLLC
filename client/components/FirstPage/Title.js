import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Customers from "./Customers";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PaidIcon from "@mui/icons-material/Paid";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LocalAtmSharpIcon from "@mui/icons-material/LocalAtmSharp";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import { Divider } from "@mui/material";

const Desc = () => {
  return (
    <section className="titlePic">
      <Box
        sx={{
          pt: 14,
          pb: 15,
          display: "flex",
          justifyContent: "center",
          borderRadius: "15px",
        }}
      >
        <img
          className="logoPic"
          src="/logo.png"
          height={300}
          data-aos="zoom-out"
          data-aos-duration="2000"
        />
      </Box>
    </section>
  );
};

export default Desc;
