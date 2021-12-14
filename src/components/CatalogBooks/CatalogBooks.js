import React from "react";
import CatalogBookCard from "../Cards/CatalogBookCard/CatalogBookCard";
import "./CatalogBooks.css";

function CatalogBooks({ books }) {
  return (
    <div className="catalog_books_container">
      {books.map((book) => {
        return <CatalogBookCard book={book} />;
      })}
    </div>
  );
}

export default CatalogBooks;
