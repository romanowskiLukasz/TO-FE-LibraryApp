import React from "react";
import "./NewBooks.css";
import BookCard from "../Cards/BookCard/BookCard";

function NewBooks({ books }) {
  console.log(books);
  return (
    <>
      <div className="new_books_container">
        <h2>Popularne książki</h2>
        <div className="new_books_grid_container">
          {books.map((book) => {
            return <BookCard book={book} />;
          })}
        </div>
      </div>
    </>
  );
}

export default NewBooks;
