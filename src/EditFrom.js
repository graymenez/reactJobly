import React, { useEffect, useState } from "react";
import JoblyApi from "./api";

const EditFrom = ({ token, currentUser }) => {
  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  };
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [data, setData] = useState({
    dataOption: null,
    dataValue: null,
  });

  useEffect(() => {
    if (token && currentUser && submitted) {
      let username = localStorage.getItem("_currUsername");
      let editUserData = async (dataOption, valueToChangeTo) => {
        let data = { [`${dataOption}`]: valueToChangeTo };
        JoblyApi.editUser(username, data);
      };
      editUserData(data.dataOption, data.dataValue);
    }
  }, [data]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.id === "firstName") {
      setSubmitted(true);
      setData({
        dataOption: e.target.id,
        dataValue: formData.firstName,
      });
      window.location.reload(false);
      //  console.log(e.target.id);
    } else if (e.target.id === "lastName") {
      setSubmitted(true);
      setData({
        dataOption: e.target.id,
        dataValue: formData.lastName,
      });
      window.location.reload(false);
    } else if (e.target.id === "password") {
      setSubmitted(true);
      setData({
        dataOption: e.target.id,
        dataValue: formData.password,
      });
      window.location.reload(false);
    } else if (e.target.id === "email") {
      setSubmitted(true);
      setData({
        dataOption: e.target.id,
        dataValue: formData.email,
      });
      window.location.reload(false);
    }
  };
  return (
    <>
      <h1>Form</h1>
      <form id="firstName" onSubmit={handleSubmit}>
        <label htmlFor="firstName">Edit First Name</label>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
        />
        <button>First</button>
      </form>
      <form id="lastName" onSubmit={handleSubmit}>
        <label htmlFor="lastName">Edit Last Name</label>
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <button>Last</button>
      </form>
      <form id="password" onSubmit={handleSubmit}>
        <label htmlFor="password">Edit Last Name</label>
        <input
          name="password"
          type="text"
          placeholder="Password"
          onChange={handleChange}
        />
        <button>Last</button>
      </form>
      <form id="email" onSubmit={handleSubmit}>
        <label htmlFor="email">Edit Last Name</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
        />
        <button>Last</button>
      </form>
    </>
  );
};
export default EditFrom;
