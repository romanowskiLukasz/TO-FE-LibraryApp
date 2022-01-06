import React, { useEffect, useState } from "react";
import "./SingleUserPage.css";
import ReservedBookTable from "../../components/ReservedBookTable/ReservedBookTable";

const axios = require("axios").default;

function SingleUserPage() {
  const userId = window.location.href.substring(
    28,
    window.location.href.length
  );
  const [username, setUsername] = useState(0);
  const [reservations, setReservations] = useState([]);
  const [borrowed, setBorrowed] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/userInfo/${userId}`).then((resp) => {
      setUsername(resp.data.name);
    });
    axios.get(`http://localhost:8080/reservations/${userId}`).then((resp) => {
      setReservations(resp.data);
    });
    axios.get(`http://localhost:8080/borrowedBooks/${userId}`).then((resp) => {
      setBorrowed(resp.data);
      console.log(resp.data);
    });
  }, []);

  console.log(userId);
  return (
    <div className="single_user_page_container">
      <h1 className="contact_page_title">Profil użytkownika {username}</h1>
      <div className="contact_page_divider" />

      <div className="tables_container">
        <ReservedBookTable
          books={reservations}
          title={"Obecnie zarezerwowane"}
          columnTitle1={"Data rezerwacji"}
          columnTitle2={"Wygaśnięcie rezerwacji"}
        />
        <ReservedBookTable
          books={borrowed}
          title={"Obecnie wypożyczone"}
          columnTitle1={"Data wypożyczenia"}
          columnTitle2={"Termin oddania"}
        />
      </div>
    </div>
  );
}

export default SingleUserPage;
