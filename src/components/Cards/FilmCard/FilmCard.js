import React from "react";
import { Link } from "react-router-dom";
import "./FilmCard.css";

function FilmCard({ film }) {
  const { title, name, img, film_id } = film;
  return (
    <Link to={"/films/" + film_id} className="link">
      <div className="film_card">
        <img src={img} className="film_card_image" />
        <p className="film_card_title">{title}</p>
        <p className="film_card_name">{name}</p>
      </div>
    </Link>
  );
}

export default FilmCard;
