import { Box } from "@mui/material";
import { Suspense } from "react";

import { NavBar, Footer } from "./components";
import BaseRoutes from "./Routes/BaseRoutes";

import "./App.css";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <BaseRoutes />
        <Footer />
      </Suspense>
    </Box>
  );
};

export default App;
