import React from "react";
import "./NewBooks.css";
import BookCard from "../Cards/BookCard/BookCard";
import Divider from "../Divider/Divider";

function NewBooks({ books, sectionTitle }) {
  return (
    <>
      <div className="new_books_container">
        <Divider sectionTitle={sectionTitle} />
        <div className="new_books_grid_container">
          {books.map((book) => {
            return <BookCard key={book.book_id} book={book} />;
          })}
        </div>
      </div>
    </>
  );
}

export default NewBooks;
