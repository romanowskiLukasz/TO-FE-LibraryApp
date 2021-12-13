import { action } from "easy-peasy";

export default {
  isLoggedIn: false,
  loggedUserEmal: "",

  //============= ACTIONS =================
  setIsLoggedIn: action((state, email) => {
    state.isLoggedIn = true;
    state.loggedUserEmal = email;
  }),
};
