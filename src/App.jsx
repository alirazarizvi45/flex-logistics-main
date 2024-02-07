import React from "react";

import "./App.css";
import Navbar from "./pages/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashbord/Dashboard";
import Footer from "./pages/Footer/Footer";
import MainNav from "./pages/Navbar/mainNav";
import Register from "./pages/auth/Register";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainNav/>
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
          path="/signup"
          element={
            <>
              <MainNav bgColor="#F2B705"/>
              <Register/>
            
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
