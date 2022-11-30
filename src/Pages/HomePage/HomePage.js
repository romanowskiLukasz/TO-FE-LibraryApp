import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import RentalInfo from "../../components/RentalInfo/RentalInfo";
import NewFilms from "../../components/NewFilms/NewFilms";
import { useStoreState } from "easy-peasy";
import "./HomePage.css";
import { useStoreActions } from "easy-peasy";
const axios = require("axios").default;

function HomePage() {
  const [allfilms, setAllfilms] = useState([]);
  const [popularfilms, setPopularfilms] = useState([]);
  const userEmail = useStoreState((state) => state.loggedUserEmal);
  const setMe = useStoreActions((actions) => actions.setMe);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("http://localhost:8080/films").then((resp) => {
      setAllfilms(resp.data);
    });
    axios.get("http://localhost:8080/popularFilms").then((resp) => {
      setPopularfilms(resp.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8080/me/${userEmail}`).then((resp) => {
      setMe(resp.data);
    });
  }, [userEmail]);

  return (
    <>
      <Banner />
      <div className="home_page_container">
        <div className="home_page_films_container">
          <NewFilms
            films={popularfilms.slice(0, 8)}
            sectionTitle={"Popularne filmy"}
          />
          <NewFilms
            films={allfilms.slice(allfilms.length - 8, allfilms.length)}
            sectionTitle={"Nowości w naszej wypożyczalni"}
          />
        </div>
        <div className="home_page_info_container">
          <RentalInfo />
        </div>
      </div>
    </>
  );
}

export default HomePage;
