import React, { useEffect } from "react";
import "../RegistrationForm/Form.css";
import validateInfo from "./validateInfo";
import useForm from "./useForm";
import { Link, Route, useNavigate } from "react-router-dom";
import WrongPasswordBanner from "./WrongPasswordBanner";
import { useStoreState } from "easy-peasy";
import Divider from "../Divider/Divider";

function LoginForm() {
  const navigate = useNavigate();
  const { handleChange, handleSubmit, values, errors, wrongPassword } =
    useForm(validateInfo);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isLoggedIn = useStoreState((state) => state.isLoggedIn);
  return (
    <div className="form-container">
      {isLoggedIn && navigate("/")}
      <div className="form-content-right">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="login_form_title_container">
            <Divider sectionTitle={"Zaloguj się"} />
          </div>

          {wrongPassword && <WrongPasswordBanner />}
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Podaj swój email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Hasło</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Wpisz swoje hasło"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <button className="form-input-btn" type="submit">
            Zaloguj się
          </button>
          <Link to="/registration" className="form-input-login">
            <span>Nie masz jeszcze konta? Zarejsetruj się klikając tutaj.</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
