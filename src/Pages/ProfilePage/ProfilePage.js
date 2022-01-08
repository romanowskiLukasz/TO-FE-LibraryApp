import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import ReservedBookTable from "../../components/ReservedBookTable/ReservedBookTable";
import UserInfo from "../../components/UserInfo/UserInfo";
import { useStoreState } from "easy-peasy";
import { calculateFine } from "../../components/Utils/calculateFine";

const axios = require("axios").default;

function ProfilePage() {
  const userId = useStoreState((state) => state.me.id);
  const [reservations, setReservations] = useState([]);
  const [borrowed, setBorrowed] = useState([]);
  const [usersFine, setUsersFine] = useState(0.0);
  let fine = 0.0;

  useEffect(() => {
    if (userId != null) {
      axios.get(`http://localhost:8080/reservations/${userId}`).then((resp) => {
        setReservations(resp.data);
      });
      axios
        .get(`http://localhost:8080/borrowedBooks/${userId}`)
        .then((resp) => {
          setBorrowed(resp.data);
        });
    }
  }, []);

  useEffect(() => {
    let daysDiff;
    borrowed.map((book) => {
      const returnDate = new Date(book.return_date);
      const todaysDate = new Date();

      daysDiff = calculateFine(returnDate, todaysDate);

      fine += daysDiff * 0.25;
      setUsersFine(fine);
    });
  }, [borrowed]);

  return (
    <>
      <h1 className="contact_page_title">Twój profil</h1>
      <div className="contact_page_divider" />
      <div className="contact_page_container">
        <UserInfo
          userId={userId}
          isLogoutDisplayed={true}
          title={"Twoje dane"}
          fine={usersFine.toFixed(2)}
        />
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
