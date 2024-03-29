import React, { useEffect } from "react";
import Divider from "../../Divider/Divider";
import "./CatalogFilmCard.css";
import Rating from "@mui/material/Rating";
import { useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";

const axios = require("axios").default;

function CatalogFilmCard({ film, userRating, avgRating }) {
  const { title, img, name, publishingHouse, film_id } = film;
  const isLoggedIn = useStoreState((state) => state.isLoggedIn);
  const me = useStoreState((state) => state.me);
  const [rating, setRating] = React.useState(0);
  const [avgfilmRating, setAvgRating] = React.useState(0);

  useEffect(() => {
    if (userRating != null) {
      setRating(userRating.stars_count);
    }
  }, [userRating]);
  useEffect(() => {
    if (avgRating != null) {
      setAvgRating(parseInt(avgRating.stars_count));
    }
  }, [avgRating]);

  const handleChange = (value, newValue) => {
    setRating(newValue);
    axios.post("http://localhost:8080/rating", {
      stars_count: newValue,
      film_film_id: film_id,
      user_id: me.id,
    });
  };

  return (
    <div className="catalog_film_card_container">
      <Link to={"/films/" + film_id} className="link">
        <img src={img} />
      </Link>
      <div className="catalog_film_card_content">
        <Link to={"/films/" + film_id} className="link">
          <Divider sectionTitle={title} />
          <p>Autor: {name}</p>
          <p>Wydawnictwo: {publishingHouse}</p>

          <p style={{ marginTop: "25px" }}>Średnia ocena:</p>
          <Rating value={avgfilmRating} readOnly />
        </Link>
        {isLoggedIn && (
          <>
            <p style={{ marginTop: "25px" }}>Twoja ocena:</p>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={handleChange}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CatalogFilmCard;
