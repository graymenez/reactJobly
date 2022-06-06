import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Logout = () => {
  let navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    window.location.reload(navigate("/"));
  }, []);
  const log = () => {
    alert("sorry no token");
  };
};
export default Logout;
