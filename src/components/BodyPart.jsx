import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gymlogo.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #891a1e",
              background: "#fee2c5",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "30px",
              boxShadow: "0px 0px 10px 0px #ffffff",
            }
          : {
              background: "#fee2c5",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "30px",
              boxShadow: "0px 0px 10px 0px #ffffff",
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="gymlogo" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#891a1e"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;

// sx={{
//   borderTop: bodyPart === item ? "4px solid #891a1e" : "",
//   background: "#fee2c5",
//   borderBottomLeftRadius: "20px",
//   width: "270px",
//   height: "280px",
//   cursor: "pointer",
//   boxShadow: "0px 0px 10px 0px #ffffff",
//   gap: "47px",
// }}
// onClick={() => {
//   setBodyPart(item);
//   window.scrollTo({ top: "1800", left: "100", behavior: "smooth" });
// }}
