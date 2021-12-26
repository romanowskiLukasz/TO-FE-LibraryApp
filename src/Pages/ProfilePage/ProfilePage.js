import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import ReservedBookTable from "../../components/ReservedBookTable/ReservedBookTable";
import UserInfo from "../../components/UserInfo/UserInfo";
import { useStoreState } from "easy-peasy";

const axios = require("axios").default;

function ProfilePage() {
  const userId = useStoreState((state) => state.me.id);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/reservations/${userId}`).then((resp) => {
      setReservations(resp.data);
    });
  }, []);

  return (
    <>
      <h1 className="contact_page_title">Twój profil</h1>
      <div className="contact_page_divider" />
      <div className="contact_page_container">
        <UserInfo />
        <ReservedBookTable books={reservations} />
      </div>
    </>
  );
}

export default ProfilePage;
