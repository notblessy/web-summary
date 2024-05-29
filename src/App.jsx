import { Route, Routes } from "react-router-dom";
import { Box } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
import CustomHeader from "./components/CustomHeader";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <Box style={{ position: "relative", width: "100%", height: "100vh" }}>
        <CustomHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <Analytics />
      </Box>
    </>
  );
}

export default App;
