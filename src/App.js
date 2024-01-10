import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";

import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./App.css";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
