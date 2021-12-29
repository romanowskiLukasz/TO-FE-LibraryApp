import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import ReservedBookTable from "../../components/ReservedBookTable/ReservedBookTable";
import UserInfo from "../../components/UserInfo/UserInfo";
import { useStoreState } from "easy-peasy";

const axios = require("axios").default;

function ProfilePage() {
  const userId = useStoreState((state) => state.me.id);
  const [reservations, setReservations] = useState([]);
  const [borrowed, setBorrowed] = useState([]);

  useEffect(() => {
    if (userId != null) {
      axios.get(`http://localhost:8080/reservations/${userId}`).then((resp) => {
        setReservations(resp.data);
      });
      axios
        .get(`http://localhost:8080/borrowedBooks/${userId}`)
        .then((resp) => {
          setBorrowed(resp.data);
          console.log(resp.data);
        });
    }
  }, []);

  return (
    <>
      <h1 className="contact_page_title">Twój profil</h1>
      <div className="contact_page_divider" />
      <div className="contact_page_container">
        <UserInfo />
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
    </>
  );
}

export default ProfilePage;
