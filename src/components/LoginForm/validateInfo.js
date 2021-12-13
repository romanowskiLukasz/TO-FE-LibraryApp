export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "To pole jest wymagane";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Podany email ma niewłaściwy format";
  }
  return errors;
}
