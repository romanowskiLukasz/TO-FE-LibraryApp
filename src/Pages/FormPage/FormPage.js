import React, { useEffect, useState } from "react";
import "./FormPage.css";
import { useStoreState } from "easy-peasy";

const axios = require("axios").default;

function FormPage() {
  const [values, setValues] = useState({
    title: "",
    author: "",
    publishingHouse: "",
  });
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const me = useStoreState((state) => state.me);

  const handleSubmit = () => {
    if (
      values.title === "" ||
      values.author === "" ||
      values.publishingHouse === ""
    ) {
      setSubmitted(false);
      setError(true);
    } else if (me != null) {
      setError(false);
      axios.post("http://localhost:8080/user/form", {
        title: values.title,
        author: values.author,
        publishingHouse: values.publishingHouse,
        userId: me.id,
      });

      setValues({ author: "", title: "", publishingHouse: "" });
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <h1 className="contact_page_title">Wypełnij formularz</h1>
      <div className="contact_page_divider" />
      <div className="form_page_container">
        <p>
          W naszej bibliotece dbamy, by każdy znalazł coś dla siebie. Jeżeli
          chciałbyś wypożyczyć książkę, której nie ma w naszym zbiorze możesz
          złożyć podanie o jej zakup poprzez formularz. W poniższym okienku
          należy podać tytuł oraz autora książki.
        </p>
        <input
          value={values.title}
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="Podaj tytuł "
        />
        <input
          value={values.author}
          name="author"
          onChange={handleChange}
          type="text"
          placeholder="Podaj autora "
        />
        <input
          value={values.publishingHouse}
          name="publishingHouse"
          onChange={handleChange}
          type="text"
          placeholder="Podaj wydawnictwo"
        />

        <button className="form_submit_button" onClick={handleSubmit}>
          Wyślij formularz
        </button>
        {error && (
          <p className="contact_form_error_message">
            Formularz nie może być pusty
          </p>
        )}
        {submitted && (
          <p className="contact_form_submitted">Formularz został wysłany</p>
        )}
      </div>
    </>
  );
}

export default FormPage;
