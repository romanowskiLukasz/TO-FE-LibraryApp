export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Podanie imienia i nazwiska jest obowiązkowe';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = 'Podanie adresu email jest obowiązkowe';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Podany email jest niepoprawny';
  }
  if (!values.password) {
    errors.password = 'Podanie hasła jest obowiązkowe';
  } else if (values.password.length < 6) {
    errors.password = 'Hasło musi mieć co najmniej 6 znaków';
  }

  if (!values.password2) {
    errors.password2 = 'Podanie hasła jest obowiązkowe';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Podane hasła nie są identyczne';
  }
  return errors;
}
