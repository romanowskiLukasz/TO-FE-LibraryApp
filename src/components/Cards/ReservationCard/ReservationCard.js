import React from "react";
import "./ReservationCard.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

function ReservationCard({ reservation, handleDelete, handleapprovement }) {
  const { filmAuthor, filmTitle, userId, id, userName, filmId } = reservation;

  return (
    <div className="reservation_card_container">
      <div className="catalog_film_card_content">
        <h2 className="reservation_card_title">Tytuł filmu: {filmTitle}</h2>
        <h3>Reżyser filmu: {filmAuthor}</h3>
        <h3>Imię i nazwisko użytkownika: {userName}</h3>
        <h3>Numer karty  użytkownika: 00000{userId}</h3>
      </div>
      <div className="form_card_icons_container">
        <TiTick
          size={30}
          className="form_aprove_icon"
          onClick={() => handleapprovement(userId, filmId, id)}
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
