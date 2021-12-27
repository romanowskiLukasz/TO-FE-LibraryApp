import React from "react";
import CatalogBookCard from "../Cards/CatalogBookCard/CatalogBookCard";
import "./CatalogBooks.css";

function CatalogBooks({ books, userRaitings }) {
  return (
    <div className="catalog_books_container">
      {books.map((book) => {
        const rating = userRaitings.find((rating) => {
          rating.book_book_id = book.book_id;
        });
        return <CatalogBookCard book={book} userRating={rating} />;
      })}
    </div>
  );
}

export default CatalogBooks;
