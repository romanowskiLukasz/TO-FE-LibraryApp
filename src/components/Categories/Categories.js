import React from "react";
import { useRef } from "react";

function Categories({ categories, filterfilmCategories }) {
  const reference = useRef(null);
  return (
    <>
      <input
        list="browsers"
        id="myBrowser"
        name="myBrowser"
        placeholder="Wybierz kategorie"
        ref={reference}
        onChange={() => filterfilmCategories(reference.current.value)}
      />
      <datalist id="browsers">
        {categories.map((genre, key) => {
          return (
            <option key={key} value={genre}>
              {" "}
            </option>
          );
        })}
      </datalist>
    </>
  );
}

export default Categories;
