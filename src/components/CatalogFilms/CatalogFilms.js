import React from "react";
import CatalogFilmCard from "../Cards/CatalogFilmCard/CatalogFilmCard";
import "./CatalogFilms.css";

function CatalogFilms({ films, userRaitings, avgRatings }) {
  return (
    <div className="catalog_films_container">
      {films.map((film) => {
        const rating = userRaitings.find((rating) => {
          if (rating.film_film_id === film.film_id) {
            return rating.stars_count;
          }
        });
        const avgRating = avgRatings.find((rating) => {
          if (rating.film_film_id === film.film_id) {
            return rating.stars_count;
          }
        });
        return (
          <CatalogFilmCard
            key={film.film_id}
            film={film}
            userRating={rating}
            avgRating={avgRating}
          />
        );
      })}
    </div>
  );
}

export default CatalogFilms;
