import { Routes, Route } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

function App() {
  return (
    <Box sx={{ p: 1, width: { xl: "1370px", md: "100%" }, margin: "auto" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
      <Typography
        component="h2"
        style={{
          color: "#333",
          marginTop: "5rem",
          display: "flex",
          justifyContent: "center",
          gap: ".6rem",
        }}
      >
        Created by
        <a
          style={{
            color: "#9e9e9e",
            textDecoration: "none",
          }}
          href="https://github.com/RasulSonmez"
        >
          {" "}
          Rasul Sonmez
        </a>{" "}
      </Typography>
    </Box>
  );
}

export default App;
