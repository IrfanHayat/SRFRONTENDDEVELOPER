import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";

import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
