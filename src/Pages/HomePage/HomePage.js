import React, { useState, useEffect } from "react";
import NewBooks from "../../components/NewBooks/NewBooks";
const axios = require("axios").default;

function HomePage() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books").then((resp) => {
      setAllBooks(resp.data);
    });
  }, []);

  return (
    <div>
      <NewBooks books={allBooks.slice(0, 8)} />
    </div>
  );
}

export default HomePage;
