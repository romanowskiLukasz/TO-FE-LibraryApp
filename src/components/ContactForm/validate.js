export default function validate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Podanie adresu email jest obowiązkowe";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Podany email jest niepoprawny";
  }
  if (!values.topic) {
    errors.topic = "Podanie tematu jest obowiązkowe";
  }

  if (!values.contents) {
    errors.contents = "Podanie treści jest obowiązkowe";
  }
  return errors;
}
