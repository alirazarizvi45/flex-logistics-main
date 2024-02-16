import React from "react";
import Home from "./Home";
import MyRides from "./MyRides";
import { Route, Routes } from "react-router-dom";
import DriverNavbarAndDashBoard from "./DriverNavbarAndDashBoard";
import Default from "./Default";
import Earning from "./Earning";
import Messages from "./Messages";
import Support from "./Support";
import Logout from "./Logout";

const Dashboard = () => {
  return (
    <>
      <DriverNavbarAndDashBoard>
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/My Rides" element={<MyRides />} />
          <Route path="/Vehicle Details" element={<MyRides />} />
          <Route path="/Earning" element={<Earning />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </DriverNavbarAndDashBoard>
    </>
  );
};

export default Dashboard;
