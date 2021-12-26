import React from "react";
import { useStoreState } from "easy-peasy";

function ContactInfo() {
  const me = useStoreState((state) => state.me);

  return (
    <div className="contact_info_container">
      <h2>Twoje dane</h2>
      <h3>Email</h3>
      <p>{me.email}</p>
      <h3>Imie i Nazwisko</h3>
      <p>{me.name}</p>
    </div>
  );
}

export default ContactInfo;
