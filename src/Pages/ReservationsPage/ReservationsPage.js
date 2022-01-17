import "./ReservationPage.css";
import React, { useRef, useEffect, useState } from "react";
import ReservationCard from "../../components/Cards/ReservationCard/ReservationCard";

const axios = require("axios").default;

function ReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const inputRef = useRef("");
  const [choosenReservations, setChoosenReservations] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("http://localhost:8080/admin/allReservations").then((resp) => {
      setReservations(resp.data);
      setChoosenReservations(resp.data);
    });
  }, []);

  const handleDelete = (id) => {
    let newReservations = choosenReservations.filter(
      (reservation) => reservation.id != id
    );
    console.log(newReservations);
    setChoosenReservations(newReservations);
    axios.delete("http://localhost:8080/deleteReservation/" + id);
  };

  const handleapprovement = (userId, bookId, id) => {
    let newReservations = choosenReservations.filter(
      (reservation) => reservation.id != id
    );
    setChoosenReservations(newReservations);
    axios.delete("http://localhost:8080/deleteReservation/" + id);
    axios.post("http://localhost:8080/admin/addBorrowedBook", {
      bookId: bookId,
      userId: userId,
    });
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
      <h1 className="catalog_page_title">Przeglądaj rezerwacje</h1>
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
            <ReservationCard
              key={reservation.id}
              reservation={reservation}
              handleDelete={handleDelete}
              handleapprovement={handleapprovement}
            />
          );
        })}
      </div>
    </>
  );
}

export default ReservationsPage;
