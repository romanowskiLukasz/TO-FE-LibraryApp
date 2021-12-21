import React from "react";
import { useRef } from "react";

function Categories({ categories, filterFilmCategories }) {
  const reference = useRef(null);
  return (
    <>
      <input
        list="browsers"
        id="myBrowser"
        name="myBrowser"
        placeholder="Wybierz kategorie"
        ref={reference}
        onChange={() => filterFilmCategories(reference.current.value)}
      />
      <datalist id="browsers">
        {categories.map((genre) => {
          return <option value={genre}> </option>;
        })}
      </datalist>
    </>
  );
}

export default Categories;
