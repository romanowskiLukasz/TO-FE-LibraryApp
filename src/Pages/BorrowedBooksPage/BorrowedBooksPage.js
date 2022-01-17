import "./BorrowedBooksPage.css";
import React, { useRef, useEffect, useState } from "react";
import ReservationCard from "../../components/Cards/ReservationCard/ReservationCard";
import BorrowedBookCard from "../../components/Cards/BorrowedBookCard/BorrowedBookCard";

const axios = require("axios").default;

function BorrowedBooksPage() {
  const [reservations, setReservations] = useState([]);
  const inputRef = useRef("");
  const [choosenReservations, setChoosenReservations] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("http://localhost:8080/admin/allBorrowedBooks").then((resp) => {
      setReservations(resp.data);
      setChoosenReservations(resp.data);
    });
  }, []);

  const handleapprovement = (userId, bookId, id) => {
    let newReservations = choosenReservations.filter(
      (reservation) => reservation.id != id
    );
    setChoosenReservations(newReservations);
    axios.delete("http://localhost:8080/deleteBorrowedBook/" + id);
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
      <h1 className="catalog_page_title">Przeglądaj wypożyczone książki</h1>
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
            <BorrowedBookCard
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

export default BorrowedBooksPage;
