import React, { useEffect, useState } from "react";
import CatalogBooks from "../../components/CatalogBooks/CatalogBooks";
import "./CatalogPage.css";

const axios = require("axios").default;

function CatalogPage() {
  const [inputValues, setInputValues] = useState({
    first: "",
    second: "",
  });
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books").then((resp) => {
      setAllBooks(resp.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  return (
    <>
      <h1 className="catalog_page_title">Katalog</h1>
      <div className="catalog_page_divider" />
      <div className="catalog_page_inputs_container">
        <input
          value={inputValues.email}
          name="first"
          onChange={handleChange}
          type="text"
          placeholder="Wyszukaj autora lub tytuł"
        />
        <input
          list="browsers"
          id="myBrowser"
          name="myBrowser"
          placeholder="Wybierz kategorie"
        />
        <datalist id="browsers">
          <option value="Akcja"> </option>
          <option value="Dramat"></option>
          <option value="Literatura Piękna"></option>
          <option value="Fantastyka"></option>
          <option value="Reportaż"></option>
        </datalist>
      </div>
      <CatalogBooks books={allBooks} />
    </>
  );
}

export default CatalogPage;
