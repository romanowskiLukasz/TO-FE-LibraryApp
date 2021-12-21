import React, { useEffect, useState } from "react";
import Divider from "../../components/Divider/Divider";
import "./SingleBookPage.css";

const axios = require("axios").default;

function SingleBookPage() {
  let bookId = window.location.href.substring(
    window.location.href.length - 1,
    window.location.href.length
  );
  const [bookInfo, setBookInfo] = useState([]);

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
      <div className="single_book_info_container">
        <Divider sectionTitle={title} />
        <p>{description}</p>
      </div>
      <h2>Kategoria:{genre}</h2>
    </div>
  );
}

export default SingleBookPage;
