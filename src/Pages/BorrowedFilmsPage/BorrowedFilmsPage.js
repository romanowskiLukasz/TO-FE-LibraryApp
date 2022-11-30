import "./BorrowedFilmsPage.css";
import React, { useRef, useEffect, useState } from "react";
import ReservationCard from "../../components/Cards/ReservationCard/ReservationCard";
import BorrowedFilmCard from "../../components/Cards/BorrowedFilmCard/BorrowedFilmCard";

const axios = require("axios").default;

function BorrowedFilmsPage() {
  const [reservations, setReservations] = useState([]);
  const inputRef = useRef("");
  const [choosenReservations, setChoosenReservations] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("http://localhost:8080/admin/allBorrowedFilms").then((resp) => {
      setReservations(resp.data);
      setChoosenReservations(resp.data);
    });
  }, []);

  const handleapprovement = (userId, filmId, id) => {
    let newReservations = choosenReservations.filter(
      (reservation) => reservation.id != id
    );
    setChoosenReservations(newReservations);
    axios.delete("http://localhost:8080/deleteBorrowedFilm/" + id);
  };

  const handleSearchChange = () => {
    if (inputRef.current.value !== "") {
      const newItems = choosenReservations.filter((item) => {
        return item.userName
          .toLowerCase()
          .includes(inputRef.current.value.toLowerCase());
      });
      return setChoosenReservations(newItems);
    } else if (inputRef.current.value == "")
      return setChoosenReservations(reservations);
  };

  return (
    <>
      <h1 className="catalog_page_title">Przeglądaj wypożyczone filmu</h1>
      <div className="catalog_page_divider" />
      <div className="catalog_page_inputs_container">
        <input
          ref={inputRef}
          onChange={handleSearchChange}
          type="text"
          placeholder="Wyszukaj użytkownika"
        />
      </div>
      <div className="users_cards_container">
        {choosenReservations.map((reservation) => {
          return (
            <BorrowedFilmCard
              key={reservation.id}
              reservation={reservation}
              handleapprovement={handleapprovement}
            />
          );
        })}
      </div>
    </>
  );
}

export default BorrowedFilmsPage;
