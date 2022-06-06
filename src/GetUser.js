import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JoblyApi from "./api";

// const GetUser = () => {
const username = localStorage.getItem("_currUsername");
const getUser = async () => {
  let res = await JoblyApi.getUser(username);
  return res;
};
export default getUser;
