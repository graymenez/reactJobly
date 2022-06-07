import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import refresh from "./refresh";

const Login = ({ BASE_URL }) => {
  // Sets INITIAL_STATE

  const INITIAL_STATE = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  let navigate = useNavigate();
  // Handles changes on the Login form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  /** On submit sends formData "username" and "password" to retrieve an auth token.
   * Sets localStorage "_token" to the retrieved data.
   * Sets localStorage "_currUsername" to formData username.
   * Once authorized navigate to "/" as logged in user */

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post(
      BASE_URL === process.env.REACT_APP_BASE_URL
        ? `${BASE_URL}auth/token`
        : `${BASE_URL}/auth/token`,
      {
        username: "coreyjimenez",
        password: "Cjscrew0942",
      }
    );
    let token = res.data.token;
    localStorage.setItem("_token", token);
    localStorage.setItem("_currUsername", formData.username);
    refresh(navigate("/"));
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Login;
