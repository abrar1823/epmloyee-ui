import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Addemp } from "./Addemp";
import { EmployeeDetails } from "./EmployeeDetails";
import { DashBoard } from "./DashBoard";
import { Nav } from "./Nav";
import { Logout } from "./Logout";
import { Login } from "./Login";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Addemp />} />
        <Route path="/empdetail" element={<EmployeeDetails />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
