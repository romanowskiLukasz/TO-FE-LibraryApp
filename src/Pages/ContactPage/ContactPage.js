import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import "./ContactPage.css";

function ContactPage() {
  return (
    <>
      <h1 className="contact_page_title">Skontaktuj się z nami</h1>
      <div className="contact_page_divider" />
      <div className="contact_page_container">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
}

export default ContactPage;
