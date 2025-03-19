import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import ProfilePage from "./components/profile";
import AboutUs from "./components/aboutus";
import Detect from "./components/detect";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profilepage" element={<ProfilePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Detect" element={<Detect />} />

      </Routes>
    </Router>
  );
}

export default App;