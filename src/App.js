import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider, createStore } from "easy-peasy";
import model from "./easy-peasy/model";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";

const store = createStore(model);

function App() {
  return (
    <>
      <StoreProvider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/" exact component={Home} />
              <Route path="/repertoire" exact component={Repertoire} />
              <Route path="/offers" exact component={Offers} />
              <Route path="/sign-up" exact component={SignUp} />
              <Route path="/registration" exact component={Registration} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/buy-ticket" exact component={BuyTicketPage} />
              <Route path="/film/:filmId" children={<FilmPage />} /> */}
          </Routes>
        </Router>
      </StoreProvider>
    </>
  );
}

export default App;
