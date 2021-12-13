import { useState, useEffect } from "react";
const axios = require("axios").default;

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      let name = values.username.substr(0, values.username.indexOf(" "));
      let surname = values.username.substr(
        values.username.indexOf(" "),
        values.username.length
      );
      axios.post("http://localhost:8080/user/register", {
        name: name,
        surname: surname,
        email: values.email,
        password: values.password,
      });
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
