import React, { useEffect, useState } from "react";
import Divider from "../../components/Divider/Divider";
import "./SingleBookPage.css";
import { useStoreState } from "easy-peasy";

const axios = require("axios").default;

function SingleBookPage() {
  let bookId = window.location.href.substring(28, window.location.href.length);

  const [bookInfo, setBookInfo] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const isLoggedIn = useStoreState((state) => state.isLoggedIn);
  const me = useStoreState((state) => state.me);

  const handleClick = () => {
    axios
      .post("http://localhost:8080/book/reservation", {
        bookId: bookId,
        userId: me.id,
      })
      .then((response) => {
        if (response.data == "0") {
          setIsSubmitted(true);
        } else if (response.data == "1") {
          setError(true);
          setIsSubmitted(false);
        }
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`http://localhost:8080/books/${bookId}`).then((resp) => {
      setBookInfo(resp.data);
    });
  }, []);

  const { description, genre, img, name, publishingHouse, title } = bookInfo;

  return (
    <div className="single_book_container">
      <img src={img} />
      <div className="single_book_description_container">
        <Divider sectionTitle={title} />
        <p>{description}</p>
        {isLoggedIn && (
          <>
            <button
              className="single_book_reservation_button"
              onClick={handleClick}
            >
              Zarezerwuj
            </button>
            {isSubmitted && (
              <p className="book_reservation_submitted_info">
                Książka została zarezerwowana
              </p>
            )}
            {error && (
              <p className="book_reservation_error_info">
                Ta książka nie jest obecnie dostępna
              </p>
            )}
          </>
        )}
      </div>
      <div className="single_book_description_container">
        <h2>Kategoria:{genre}</h2>
        <h2>Autor:{name}</h2>
        <h2>Wydawinctwo:{publishingHouse}</h2>
      </div>
    </div>
  );
}

export default SingleBookPage;
