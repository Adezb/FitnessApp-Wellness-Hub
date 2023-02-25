import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Gym from "../assets/images/dumbbell-logo.png";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Gym}
          alt="Logo"
          style={{
            width: "70px",
            height: "60px",
            margin: "15px 25px",
            borderRadius: "5px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#40262a",
            borderBottom: "3px solid #0d0808",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#40262a" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default NavBar;
