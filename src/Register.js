import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import JoblyApi from "./api";

const Register = ({ BASE_URL, setCurrUser }) => {
  const navigate = useNavigate();

  // Sets initial state

  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  // Handles change on the register form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  /** On submit creates a new user and sets the returned token to localStorage "_token"
   * Sets the formData username to localStorage "_currUsername"
   * Redirects to "/" and reloads page to refresh data
   * Sets the form data back to initial state (May not be necessary)
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const createUser = async () => {
      let newUser = await axios.post(`${BASE_URL}/auth/register`, {
        username: formData.username,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      });
      localStorage.setItem("_token", newUser.data.token);
      localStorage.setItem("_currUsername", formData.username);
      window.location.reload(navigate(`/`));
    };
    createUser();

    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
        />

        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="text"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
        />

        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          value={formData.firstName}
        />

        <label htmlFor="Last Name">Last Name</label>
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          value={formData.lastName}
        />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <button>Register</button>
      </form>
    </div>
  );
};
export default Register;
