import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import LibraryInfo from "../../components/LibraryInfo/LibraryInfo";
import NewBooks from "../../components/NewBooks/NewBooks";
import "./HomePage.css";
const axios = require("axios").default;

function HomePage() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books").then((resp) => {
      setAllBooks(resp.data);
    });
  }, []);

  return (
    <>
      <Banner />
      <div className="home_page_container">
        <div className="home_page_books_container">
          <NewBooks
            books={allBooks.slice(0, 8)}
            sectionTitle={"Popularne książki"}
          />
          <NewBooks
            books={allBooks.slice(0, 8)}
            sectionTitle={"Nowości w naszej bibliotece"}
          />
        </div>
        <div className="home_page_info_container">
          <LibraryInfo />
        </div>
      </div>
    </>
  );
}

export default HomePage;
