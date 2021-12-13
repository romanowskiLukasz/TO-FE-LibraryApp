import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider, createStore } from "easy-peasy";
import model from "./easy-peasy/model";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ContactPage from "./Pages/ContactPage/ContactPage";

const store = createStore(model);

function App() {
  return (
    <>
      <StoreProvider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<LoginPage />} />
            <Route path="/registration" element={<RegisterPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </Router>
      </StoreProvider>
    </>
  );
}

export default App;
