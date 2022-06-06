import React from "react";
import Register from "./Register";
import Home from "./Home";
import Nav from "./Nav";
import Logout from "./Logout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Companies from "./Companies";
import Company from "./Company";
import JobList from "./JobList";
import Job from "./Job";
import Profile from "./Profile";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
const MainRoutes = ({ token, currentUser }) => {
  // Sets all routes and passes "token" and "currentUser" props where necessary

  return (
    <>
      <BrowserRouter>
        <Nav currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route
            path="/companies"
            element={<Companies token={token} currentUser={currentUser} />}
          />
          <Route
            path="/companies/:company"
            element={<Company />}
            currentUser={currentUser}
          />
          <Route path="/register" element={<Register BASE_URL={BASE_URL} />} />
          <Route path="/login" element={<Login BASE_URL={BASE_URL} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/jobs" element={<JobList currentUser={currentUser} />} />
          <Route path="/jobs/:id" element={<Job />} currentUser={currentUser} />
          <Route
            path="/profile"
            element={<Profile token={token} currentUser={currentUser} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default MainRoutes;
