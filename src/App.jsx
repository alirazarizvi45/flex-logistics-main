import React from "react";

import "./App.css";
import Navbar from "./pages/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/Aboutus"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
