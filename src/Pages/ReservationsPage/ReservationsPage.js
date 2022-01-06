import "./ReservationPage.css";
import React, { useRef, useEffect, useState } from "react";
import ReservationCard from "../../components/Cards/ReservationCard/ReservationCard";

const axios = require("axios").default;

function ReservationsPage() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("http://localhost:8080/admin/allReservations").then((resp) => {
      setReservations(resp.data);
    });
  }, []);

  const handleDelete = (id) => {
    let newReservations = reservations.filter(
      (reservation) => reservation.id != id
    );
    setReservations(newReservations);
    axios.delete("http://localhost:8080/deleteReservation/" + id);
  };

  const handleapprovement = (userId, bookId, id) => {
    let newReservations = reservations.filter(
      (reservation) => reservation.id != id
    );
    setReservations(newReservations);
    axios.delete("http://localhost:8080/deleteReservation/" + id);
    axios.post("http://localhost:8080/admin/addBorrowedBook", {
      bookId: bookId,
      userId: userId,
    });
  };

  return (
    <>
      <h1 className="catalog_page_title">Przeglądaj rezerwacji</h1>
      <div className="catalog_page_divider" />
      <div className="users_cards_container">
        {reservations.map((reservation) => {
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
