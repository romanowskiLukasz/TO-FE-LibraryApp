import React, { useEffect, useState } from "react";
import Divider from "../../components/Divider/Divider";
import "./SingleBookPage.css";
import { useStoreState } from "easy-peasy";

const axios = require("axios").default;

function SingleBookPage() {
  let bookId = window.location.href.substring(
    window.location.href.length - 1,
    window.location.href.length
  );
  const [bookInfo, setBookInfo] = useState([]);
  const [reservationResponse, setReservationResponse] = useState("");

  const isLoggedIn = useStoreState((state) => state.isLoggedIn);
  const me = useStoreState((state) => state.me);
  console.log(me.id);

  const handleClick = () => {
    axios
      .post("http://localhost:8080/book/reservation", {
        bookId: bookId,
        userId: me.id,
      })
      .then((response) => {
        console.log(response.status);
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
          <button
            className="single_book_reservation_button"
            onClick={handleClick}
          >
            Zarezerwuj
          </button>
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
