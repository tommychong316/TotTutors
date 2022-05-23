import React, { useContext, useState, } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

const RegisterPage = () => {
  

  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    is_tutor: false,
    is_tutee: false,
    location: "",
  };

  const [formData, handleInputChange,handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Tutee
          <input
            type={"checkbox"}
            name="is_tutee"
            value={formData.is_tutee}
            onChange={handleInputChange}
          />
        </label>
        <label>
        Tutor
          <input
            type={"checkbox"}
            name="is_tutor"
            value={formData.is_tutor}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Location:{" "}
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </label>
        <p style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        <button>Register!</button>
      </form>
    </div>
  );
};

export default RegisterPage;
