import React, { useEffect, useState } from "react";
import Divider from "../../components/Divider/Divider";
import "./SingleFilmPage.css";
import { useStoreState } from "easy-peasy";

const axios = require("axios").default;

function SingleFilmPage() {
  let filmId = window.location.href.substring(28, window.location.href.length);

  const [filmInfo, setfilmInfo] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const isLoggedIn = useStoreState((state) => state.isLoggedIn);
  const me = useStoreState((state) => state.me);

  const handleClick = () => {
    axios
      .post("http://localhost:8080/film/reservation", {
        filmId: filmId,
        userId: me.id,
      })
      .then((response) => {
        if (response.data == "0") {
          setIsSubmitted(true);
        } else if (response.data == "1") {
          setError(true);
          setIsSubmitted(false);
        }
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`http://localhost:8080/films/${filmId}`).then((resp) => {
      setfilmInfo(resp.data);
    });
  }, []);

  const { description, genre, img, name, publishingHouse, title } = filmInfo;

  return (
    <div className="single_film_container">
      <img src={img} />
      <div className="single_film_description_container">
        <Divider sectionTitle={title} />
        <p>{description}</p>
        {isLoggedIn && (
          <>
            <button
              className="single_film_reservation_button"
              onClick={handleClick}
            >
              Zarezerwuj
            </button>
            {isSubmitted && (
              <p className="film_reservation_submitted_info">
                Film została zarezerwowana
              </p>
            )}
            {error && (
              <p className="film_reservation_error_info">
                Tan film nie jest obecnie dostępna
              </p>
            )}
          </>
        )}
      </div>
      <div className="single_film_description_container">
        <h2>Kategoria:{genre}</h2>
        <h2>Autor:{name}</h2>
        <h2>Wydawinctwo:{publishingHouse}</h2>
      </div>
    </div>
  );
}

export default SingleFilmPage;
