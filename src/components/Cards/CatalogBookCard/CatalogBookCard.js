import React from "react";
import Divider from "../../Divider/Divider";
import "./CatalogBookCard.css";
import Rating from "@mui/material/Rating";
import { useStoreState } from "easy-peasy";

function CatalogBookCard({ book }) {
  console.log(book);
  const { title, img, name, publishingHouse } = book;
  const isLoggedIn = useStoreState((state) => state.isLoggedIn);
  const [rating, setRating] = React.useState(0);
  const [avgRating, setAvgRating] = React.useState(3);

  return (
    <div className="catalog_book_card_container">
      <img src={img} />
      <div className="catalog_book_card_content">
        <Divider sectionTitle={title} />
        <p>Autor: {name}</p>
        <p>Wydawnictwo: {publishingHouse}</p>

        <p style={{ marginTop: "25px" }}>Średnia ocena:</p>
        <Rating value={avgRating} readOnly />

        {isLoggedIn && (
          <>
            <p style={{ marginTop: "25px" }}>Twoja ocena:</p>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(value, newValue) => {
                setRating(newValue);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CatalogBookCard;
