import React from "react";

import "./App.css";
import Navbar from "./pages/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashbord/Dashboard";
import Footer from "./pages/Footer/Footer";
import MainNav from "./pages/Navbar/mainNav";
import LogIn from "./pages/LogIn/LogIn";
import AuthNavbar from "./pages/Navbar/AuthNavbar";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainNav />
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <Dashboard />
              <Footer />
            </>
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <AuthNavbar />
              <LogIn />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
