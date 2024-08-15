import React, { useEffect, useState } from "react";

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
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUserAsync } from "./ReducerSlices/user/userSlice";
import GoogleMapsNew from "./pages/RiderComps/BookRide/GoogleMapsNew";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getLoggedInUserAsync()).then(() => setIsLoading(false));
  }, [dispatch]);

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
        <Route path="/map" element={<GoogleMapsNew />} />
        <Route
          path="/Dashboard/*"
          element={
            user?.role === "driver" && user?.id ? (
              <DriverNavbarAndDashBoard />
            ) : (
              <>
                <AuthNavbar />
                <LogIn />
              </>
            )
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
          path="/ForgetPassword"
          element={
            <>
              <AuthNavbar />
              <ForgetPassword />
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
          path="/DriverSignUp"
          element={
            <>
              <AuthNavbar />
              <DriverSignUpMain />
            </>
          }
        />
        <Route
          path="/RiderSignUp"
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
            user?.role === "rider" && user?.id ? (
              <>
                <AuthNavbar />
                <RiderNavbar />
                <Footer />
              </>
            ) : (
              <>
                <AuthNavbar />
                <LogIn />
              </>
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
