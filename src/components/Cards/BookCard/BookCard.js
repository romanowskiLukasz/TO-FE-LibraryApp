import React from "react";
import "./BookCard.css";

function BookCard({ book }) {
  const { title, name, img } = book;
  return (
    <div className="book_card">
      <img src={img} className="book_card_image" />
      <p className="book_card_title">{title}</p>
      <p className="book_card_name">{name}</p>
    </div>
  );
}

export default BookCard;
