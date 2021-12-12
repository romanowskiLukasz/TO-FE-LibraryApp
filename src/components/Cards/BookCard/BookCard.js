import React from "react";
import "./BookCard.css";

function BookCard({ book }) {
  const { title, name, img } = book;
  return (
    <div className="book_card">
      <img src={img} className="book_card_image" />
      <p>{title}</p>
      <p>{name}</p>
    </div>
  );
}

export default BookCard;
