import { useState, useEffect } from "react";
import { useStoreActions } from "easy-peasy";

//TODO: change to fetch from api
const usersData = [
  {
    id: 1,
    username: "Lukasz Romanowski",
    email: "lukasz@gmail.com",
    password: "test1234",
  },
  {
    id: 2,
    username: "Karolina Konduracka",
    email: "karolina@gmail.com",
    password: "test123",
  },
];
const axios = require("axios").default;

const useForm = (validateInfo) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [wrongPassword, setWrongPassword] = useState(false);
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

    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  const login = useStoreActions((actions) => actions.setIsLoggedIn);

  useEffect(() => {
    axios
      .post("http://localhost:8080/user/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        if (
          Object.keys(errors).length === 0 &&
          isSubmitting &&
          response.data == 0
        ) {
          login(values.email);
        } else if (
          response.data != 0 &&
          isSubmitting &&
          Object.keys(errors).length === 0
        ) {
          setWrongPassword(true);
        }
      });
  }, [errors]);

  return { handleChange, handleSubmit, values, errors, wrongPassword };
};

export default useForm;
