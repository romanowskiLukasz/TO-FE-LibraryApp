import React, { useEffect, useState } from "react";
import "./SingleUserPage.css";
import ReservedBookTable from "../../components/ReservedBookTable/ReservedBookTable";
import UserInfo from "../../components/UserInfo/UserInfo";
import { calculateFine } from "../../components/Utils/calculateFine";

const axios = require("axios").default;

function SingleUserPage() {
  const userId = window.location.href.substring(
    28,
    window.location.href.length
  );
  const [userData, setUserData] = useState("");
  const [reservations, setReservations] = useState([]);
  const [borrowed, setBorrowed] = useState([]);
  const [usersFine, setUsersFine] = useState(0.0);
  let fine = 0.0;

  useEffect(() => {
    axios.get(`http://localhost:8080/userInfo/${userId}`).then((resp) => {
      setUserData(resp.data);
    });
    axios.get(`http://localhost:8080/reservations/${userId}`).then((resp) => {
      setReservations(resp.data);
    });
    axios.get(`http://localhost:8080/borrowedBooks/${userId}`).then((resp) => {
      setBorrowed(resp.data);
      calculateFine(resp.data);
    });
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
    <div className="single_user_page_container">
      <h1 className="contact_page_title">Profil użytkownika {userData.name}</h1>
      <div className="contact_page_divider" />
      <div style={{ display: "flex" }}>
        <UserInfo
          userData={userData}
          isLogoutDisplayed={false}
          title={"Dane użytkownika"}
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
    </div>
  );
}

export default SingleUserPage;
