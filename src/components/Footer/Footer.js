import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import "./Footer.css";
import { GiBlackBook } from "react-icons/gi";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Dołącz do subskrybentów newslettera by otrzymywać najnowsze oferty
        </p>
        <p className="footer-subscription-text">
          Mozesz anulować subskrybcje w kazdej chwili
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              type="email"
              name="email"
              placeholder="Twój email"
            />
            <Button buttonStyle="btn--outline" path="/">
              Subskrybuj
            </Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wraper">
          <div className="footer-link-items">
            <h2>O NAS</h2>
            <Link to="/">LibPK</Link>
            <Link to="/">Pracuj z nami</Link>
            <Link to="/">Newsletter</Link>
            <Link to="/">TKontakt</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>SOCIAL MEDIA</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>KONTAKT</h2>
            <Link to="/">Kontakt</Link>
            <Link to="/">Wsparcie</Link>
            <Link to="/">Cele</Link>
            <Link to="/">Sponsorzy</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              PK Lib <GiBlackBook size={45} style={{ marginLeft: "10px" }} />
            </Link>
          </div>
          <small className="website-rights"> PK Lib</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
