import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/dumbbell.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fee2c5">
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "150px", height: "50px" }}
          />
        </Link>
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "28px", xs: "20px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        {`© ${new Date().getFullYear()} Wellness Hub. All rights reserved.`}{" "}
        <br />
        Developed by{" "}
        <a
          href="https://adebayopokanu.me"
          style={{ textDecoration: "none", color: "#891e1a" }}
        >
          Adebayo
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
