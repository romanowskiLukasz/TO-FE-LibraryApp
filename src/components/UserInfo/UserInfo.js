import React, { useEffect, useState } from "react";
import { useStoreState } from "easy-peasy";
import "./UserInfo.css";
import ChangeUserInfo from "../../ChangeUserInfo/ChangeUserInfo";
import { useStoreActions } from "easy-peasy";
import { Link } from "react-router-dom";

const axios = require("axios").default;

function ContactInfo({ userData, isLogoutDisplayed, title, fine }) {
  const userStoreData = useStoreState((state) => state.me);
  let me = userData === undefined ? userStoreData : userData;
  const [email, setEmail] = useState(
    useStoreState((state) => state.loggedUserEmal)
  );
  const changeEmailInStore = useStoreActions(
    (actions) => actions.setLoggedUserEmal
  );
  const [showEmailChange, setShowEmailChange] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);

  const toggleEmailChange = () => {
    setShowEmailChange(!showEmailChange);
  };

  const togglePasswordChange = () => {
    setShowPasswordChange(!showPasswordChange);
  };

  const changeEmail = (values) => {
    if (me.id != undefined) {
      changeEmailInStore(values.newValue);
      me.email = values.newValue;
      setEmail(values.newValue);
      axios.put("http://localhost:8080/user/changeEmail", {
        password: values.password,
        newEmail: values.newValue,
        id: me.id,
      });
    }
  };

  const changePassword = (values) => {
    if (me.id != undefined) {
      axios.put("http://localhost:8080/user/changePassword", {
        password: values.password,
        newPassword: values.newValue,
        id: me.id,
      });
    }
  };

  const handleLogout = () => {
    window.location = "http://localhost:3000";
  };

  return (
    <div className="contact_info_container">
      <h2>{title}</h2>
      <div className="user_info_divider" />
      <h3>Numer karty do wyypożyczalni</h3>
      <p>00000{me.id}</p>
      <div className="user_info_divider" />
      <h3>Email</h3>
      <p>{me.email}</p>
      {!showEmailChange && isLogoutDisplayed && (
        <button className="user_change_info_button" onClick={toggleEmailChange}>
          Zmień email
        </button>
      )}
      {showEmailChange && isLogoutDisplayed && (
        <ChangeUserInfo
          placeholder={"Podaj nowy email"}
          isDisplayed={toggleEmailChange}
          onSubmit={changeEmail}
        />
      )}
      <div className="user_info_divider" />
      <h3>Imie i Nazwisko</h3>
      <p>{me.name}</p>

      <div className="user_info_divider" />

      {isLogoutDisplayed && (
        <>
          <h3>Hasło</h3>
          {!showPasswordChange && (
            <button
              className="user_change_info_button"
              onClick={togglePasswordChange}
            >
              Zmień hasło
            </button>
          )}
          {showPasswordChange && (
            <ChangeUserInfo
              placeholder={"Podaj nowe hasło"}
              isDisplayed={togglePasswordChange}
              onSubmit={changePassword}
            />
          )}
          <div className="user_info_divider" />
        </>
      )}

      <h3>Do zapłaty </h3>
      <p>Naliczona kwota: {fine} PLN</p>
      {isLogoutDisplayed && (
        <button className="logout_button" onClick={handleLogout}>
          Wyloguj się
        </button>
      )}
    </div>
  );
}

export default ContactInfo;
