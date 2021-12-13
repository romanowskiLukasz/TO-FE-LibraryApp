import React, { useEffect, useState } from "react";
import "./ContactForm.css";
import validate from "./validate";

const axios = require("axios").default;

function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    topic: "",
    contents: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClick = () => {
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  const onButtonBlur = () => {
    setIsSent(false);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting === true) {
      setIsSent(true);
      axios.post("http://localhost:8080/user/message", {
        email: values.email,
        topic: values.topic,
        contents: values.contents,
      });
    }
  }, [errors]);

  return (
    <div className="contact_form_container">
      <p className="contact_form_label">
        Oczekujesz od nas odpowiedzi? Napisz swój adres e-mail - odpowiemy!
      </p>
      <input
        value={values.email}
        name="email"
        onChange={handleChange}
        type="text"
        placeholder="Podaj swój email"
      />
      {errors.email && (
        <p className="contact_form_error_message">{errors.email}</p>
      )}
      <p className="contact_form_label">Z czym się do nas zwracasz?</p>
      <input
        value={values.topic}
        name="topic"
        onChange={handleChange}
        type="text"
        placeholder="Podaj temat wiadomości"
      />
      {errors.topic && (
        <p className="contact_form_error_message">{errors.topic}</p>
      )}
      <p className="contact_form_label">Treść wiadomości</p>
      <textarea
        name="contents"
        value={values.contents}
        onChange={handleChange}
        type="text"
        placeholder="Podaj treść wiadomości"
      />
      {errors.contents && (
        <p className="contact_form_error_message">{errors.contents}</p>
      )}
      <button
        onBlur={onButtonBlur}
        onClick={handleClick}
        className="contact_form_button"
      >
        Wyślij wiadomość
      </button>
      {isSent && <p className="is_sent_label">dziękujemy za wiadomość!</p>}
    </div>
  );
}

export default ContactForm;
