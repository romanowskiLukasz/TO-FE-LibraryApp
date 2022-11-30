import React from "react";
import "./NewFilm.css";
import FilmCard from "../Cards/FilmCard/FilmCard";
import Divider from "../Divider/Divider";

function NewFilms({ films, sectionTitle }) {
  return (
    <>
      <div className="new_films_container">
        <Divider sectionTitle={sectionTitle} />
        <div className="new_films_grid_container">
          {films.map((film) => {
            return <FilmCard key={film.film_id} film={film} />;
          })}
        </div>
      </div>
    </>
  );
}

export default NewFilms;
