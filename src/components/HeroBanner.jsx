import React from "react";
import { Box, Typography, Button } from "@mui/material";

import BannerImage from "../assets/images/banner-removebg.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "120px", xs: "70px" },
        ml: {
          sm: "70px",
        },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#891a1e" fontWeight="600" fontSize="26px" mt="-45px">
        Wellness Hub
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "40px", xs: "38px" } }}
        mb="23px"
        mt="30px"
      >
        Keep Your Body Fit and <br /> Stay Healthy
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="6px">
        You can search for more exercises <br /> that will keep you fit and
        healthy.
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        color="error"
        sx={{ backgroundColor: "#891a1e", padding: "10px", cursor: "pointer" }}
      >
        Explore More
      </Button>
      <img src={BannerImage} alt="Banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
