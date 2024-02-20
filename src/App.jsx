import React from "react";

import "./App.css";
import Navbar from "./pages/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import Footer from "./pages/Footer/Footer";
import MainNav from "./pages/Navbar/mainNav";
import LogIn from "./pages/LogIn/LogIn";
import AuthNavbar from "./pages/Navbar/AuthNavbar";
import MainSignUp from "./pages/MainSignUp/MainSignUp";
import DriverSignUpMain from "./pages/DriverSignUp/DriverSignUpMain";
import RiderSignUpMain from "./pages/RiderSignUp/RiderSignUpMain";
import DriverNavbarAndDashBoard from "./pages/DriverNavbarAndDashbord/DriverNavbarAndDashBoard";
import RiderNavbar from "./pages/Navbar/RiderNavbar";
import BookRide from "./pages/RiderComps/BookRide/BookRide";

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
          path="/Dashboard/*"
          element={
            <>
              <DriverNavbarAndDashBoard />
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
        <Route
          path="/SignUp"
          element={
            <>
              <AuthNavbar />
              <MainSignUp />
            </>
          }
        />

        <Route
          path="/Driver SignUp"
          element={
            <>
              <AuthNavbar />
              <DriverSignUpMain />
            </>
          }
        />
        <Route
          path="/Rider SignUp"
          element={
            <>
              <AuthNavbar />
              <RiderSignUpMain />
            </>
          }
        />
        <Route
          path="/Rider/*"
          element={
            <>
              <AuthNavbar />
              <RiderNavbar />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
