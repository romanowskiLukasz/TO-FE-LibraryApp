import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";

function BookCard({ book }) {
  const { title, name, img, book_id } = book;
  return (
    <Link to={"/books/" + book_id} className="link">
      <div className="book_card">
        <img src={img} className="book_card_image" />
        <p className="book_card_title">{title}</p>
        <p className="book_card_name">{name}</p>
      </div>
    </Link>
  );
}

export default BookCard;
