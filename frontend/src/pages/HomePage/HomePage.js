import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Map from "../../components/Map";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import DisplayTutors from "../../components/DisplayTutors/DisplayTutors";
import DisplayTutees from "../../components/DisplayTutees/DisplayTutees";
const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState([""]);
  const [tutors, setTutors] = useState([]);
  const [tutees, setTutees] = useState([]);
  useEffect(() => {
    getAllTutees();
  }, []);

  async function getAllTutees() {
    try {
      debugger;
      const response = await axios.get(
        "http://127.0.0.1:8000/api/auth/tutees/"
      );
      setTutees(response.data);
    } catch (ex) {
      console.log(`ERROR in getTutees EXCEPTION: ${ex}`);
    }
  }
  useEffect(() => {
    getAllTutors();
  }, []);

  async function getAllTutors() {
    try {
      debugger;
      const response = await axios.get(
        "http://127.0.0.1:8000/api/auth/tutors/"
      );
      setTutors(response.data);
    } catch (ex) {
      console.log(`ERROR in getTutors EXCEPTION: ${ex}`);
    }
  }
  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.make} {car.model}
          </p>
        ))}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="border-box">
        <DisplayTutors
          searchTerm={searchTerm}
          parentTutors={tutors}
          setTutors={setTutors}
        />
      </div>
      <div className="border-box">
        <DisplayTutees
          searchTerm={searchTerm}
          parentTutees={tutees}
          setTutees={setTutees}
        />
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
};

export default HomePage;
