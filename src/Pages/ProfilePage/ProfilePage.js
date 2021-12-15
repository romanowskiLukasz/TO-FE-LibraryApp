import React from "react";
import "./ProfilePage.css";
import ReservedBookTable from "../../components/ReservedBookTable/ReservedBookTable";
import UserInfo from "../../components/UserInfo/UserInfo";

function ProfilePage() {
  return (
    <>
      <h1 className="contact_page_title">Twój profil</h1>
      <div className="contact_page_divider" />
      <div className="contact_page_container">
        <UserInfo />
        <ReservedBookTable />
      </div>
    </>
  );
}

export default ProfilePage;
