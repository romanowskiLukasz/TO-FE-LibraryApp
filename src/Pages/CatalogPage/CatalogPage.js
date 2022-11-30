import React, { useEffect, useState, useRef } from "react";
import CatalogFilms from "../../components/CatalogFilms/CatalogFilms";
import "./CatalogPage.css";
import Categories from "../../components/Categories/Categories";
import { useStoreState } from "easy-peasy";

const axios = require("axios").default;

function CatalogPage() {
  const [allfilms, setAllfilms] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenfilms, setChosenfilms] = useState([]);
  const [userRaitings, setUserRatings] = useState([]);
  const [avgRatings, setAvgRatings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const me = useStoreState((state) => state.me);
  const inputRef = useRef("");

  let allCategories = [
    "Wszystkie",
    ...new Set(allfilms.map((item) => item.category)),
  ];

  useEffect(() => {
    allCategories = [
      "Wszystkie",
      ...new Set(allfilms.map((item) => item.genre)),
    ];
    setCategories(allCategories);
  }, [allfilms]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("http://localhost:8080/films").then((resp) => {
      setAllfilms(resp.data);
      setChosenfilms(resp.data);
    });
    if (me.id != null) {
      axios.get(`http://localhost:8080/ratings/${me.id}`).then((response) => {
        setUserRatings(response.data);
      });
    }
    axios.get(`http://localhost:8080/avgRatings`).then((response) => {
      setAvgRatings(response.data);
    });
  }, []);

  const filterfilmsCategories = (category) => {
    if (category === "Wszystkie" || category === "") {
      setChosenfilms(allfilms);
      return;
    }
    const newItems = chosenfilms.filter((item) => item.genre === category);

    return setChosenfilms(newItems);
  };

  const handleSearchChange = () => {
    setSearchTerm(inputRef.current.value);
    if (inputRef.current.value !== "") {
      const newItems = chosenfilms.filter((item) => {
        return item.title
          .toLowerCase()
          .includes(inputRef.current.value.toLowerCase());
      });
      return setChosenfilms(newItems);
    } else if (inputRef.current.value == "") return setChosenfilms(allfilms);
  };

  return (
    <>
      <h1 className="catalog_page_title">Katalog</h1>
      <div className="catalog_page_divider" />
      <div className="catalog_page_inputs_container">
        <input
          ref={inputRef}
          onChange={handleSearchChange}
          type="text"
          placeholder="Wyszukaj film"
        />
        <Categories
          categories={categories}
          filterfilmCategories={filterfilmsCategories}
        />
      </div>
      <CatalogFilms
        films={chosenfilms}
        userRaitings={userRaitings}
        avgRatings={avgRatings}
      />
    </>
  );
}

export default CatalogPage;
