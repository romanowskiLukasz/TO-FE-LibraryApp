import React from "react";
import "./ReservationCard.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

function ReservationCard({ reservation, handleDelete, handleapprovement }) {
  const { bookAuthor, bookTitle, userId, id, userName, bookId } = reservation;

  return (
    <div className="reservation_card_container">
      <div className="catalog_book_card_content">
        <h2 className="reservation_card_title">Tytuł książki: {bookTitle}</h2>
        <h3>Autor ksiązki: {bookAuthor}</h3>
        <h3>Imię i nazwisko użytkownika: {userName}</h3>
        <h3>Numer karty bibliotecznej użytkownika: 00000{userId}</h3>
      </div>
      <div className="form_card_icons_container">
        <TiTick
          size={30}
          className="form_aprove_icon"
          onClick={() => handleapprovement(userId, bookId, id)}
        />
        <RiDeleteBin5Fill
          size={30}
          className="form_delete_icon"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  );
}

export default ReservationCard;
