import React, { useEffect, useState } from "react";
import CatalogBooks from "../../components/CatalogBooks/CatalogBooks";
import "./CatalogPage.css";
import Categories from "../../components/Categories/Categories";

const axios = require("axios").default;

function CatalogPage() {
  const [inputValues, setInputValues] = useState({
    first: "",
    second: "",
  });
  const [allBooks, setAllBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenBooks, setChosenBooks] = useState([]);

  let allCategories = [
    "Wszystkie",
    ...new Set(allBooks.map((item) => item.category)),
  ];

  useEffect(() => {
    allCategories = [
      "Wszystkie",
      ...new Set(allBooks.map((item) => item.genre)),
    ];
    setCategories(allCategories);
  }, [allBooks]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("http://localhost:8080/books").then((resp) => {
      setAllBooks(resp.data);
      setChosenBooks(resp.data);
    });
  }, []);

  const filterBooksCategories = (category) => {
    console.log(category);
    if (category === "Wszystkie" || category === "") {
      setChosenBooks(allBooks);
      return;
    }
    const newItems = chosenBooks.filter((item) => item.genre === category);

    return setChosenBooks(newItems);
  };

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
        <Categories
          categories={categories}
          filterFilmCategories={filterBooksCategories}
        />
      </div>
      <CatalogBooks books={chosenBooks} />
    </>
  );
}

export default CatalogPage;
