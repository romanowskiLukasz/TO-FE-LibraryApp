import React from "react";
import Divider from "../../Divider/Divider";
import "./CatalogBookCard.css";

function CatalogBookCard({ book }) {
  console.log(book);
  const { title, img, name, publishingHouse } = book;
  return (
    <div className="catalog_book_card_container">
      <img src={img} />
      <div className="catalog_book_card_content">
        <Divider sectionTitle={title} />
        <p>Autor: {name}</p>
        <p>Wydawnictwo: {publishingHouse}</p>
      </div>
    </div>
  );
}

export default CatalogBookCard;
