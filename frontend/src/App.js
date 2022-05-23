// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import DisplayComments from "./components/Comments/DisplayComments";
import DisplayReviews from "./pages/ReviewPage/ReviewPage";
import Map from "./components/Map";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

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

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Map />

        <div className="border-box">
          <DisplayComments />
        </div>
        <div className="border-box">
          <DisplayReviews />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
