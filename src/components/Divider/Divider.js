import React from "react";
import "./Divider.css";

function Divider({ sectionTitle }) {
  return (
    <div className="divider_container">
      <div className="short_horizontal_divider" />
      <h2 style={{ padding: "10px" }}>{sectionTitle}</h2>
      <div className="long_horizontal_divider" />
    </div>
  );
}

export default Divider;
