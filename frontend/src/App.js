// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import DisplayComments from "./components/Comments/DisplayComments";
import Map from "./components/Map";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import AddCommentPage from "./components/Comments/AddCommentPage";

function App() {
  

  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />

          <Route path="/Review" element={<ReviewPage />} />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        

        {/* <div className="border-box">
          <DisplayComments />
        </div> */}

        <Footer />
      </div>
    </div>
  );
}

export default App;
