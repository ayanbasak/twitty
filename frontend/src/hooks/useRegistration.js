import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../validation/schemas";
import { useEffect, useState } from "react";
import userService from "../services/user.service";
import { useNavigate } from "react-router-dom";

export const useRegistration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });
  const nevigate = useNavigate();
  const [formErrors, setFormErrors] = useState(errors);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormErrors(errors);
  }, [errors]);

  const onSubmit = async (data) => {
    setFormErrors({});
    // console.log(">>> useRegistration:  " + JSON.stringify(data)); // {"email":"xavier.academy","password":"123","confirmPassword":"aaa","username":"aaaaa"}

    let requestData = {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      username: data.username,
    };

    setLoading(true);
    let { response, error } = await userService.registerUser(requestData);
    setLoading(false);
    if (error) {
      // console.log("---  error response 1000 --- ");
      let err = {
        email: {
          message: "",
        },
        password: {
          message: "",
        },
        confirmPassword: {
          message: "",
        },
        username: {
          message: "",
        },
      };
      if (error.email) {
        err.email.message = error.email;
      }
      if (error.password) {
        err.password.message = error.password;
      }
      if (error.confirmPassword) {
        err.confirmPassword.message = error.confirmPassword;
      }
      if (error.username) {
        err.username.message = error.username;
      }

      // console.log(error);
      // console.log(error.email);
      // console.log(error.password);
      setFormErrors(err);
    } else {
      // console.log(" ---- registration successfull response 2000 ----");
      // console.log(response);
      nevigate("/login");
    }
  };

  let inputs = {
    email: {
      label: "Email",
      type: "text",
      fieldName: "email",
      placeholder: "",
      register: register,
      errors: formErrors && formErrors.email,
    },
    password: {
      label: "Password",
      type: "password",
      fieldName: "password",
      placeholder: "",
      register: register,
      errors: formErrors && formErrors.password,
    },
    confirmPassword: {
      label: "Confirm Password",
      type: "text",
      fieldName: "confirmPassword",
      placeholder: "",
      register: register,
      errors: formErrors && formErrors.confirmPassword,
    },
    username: {
      label: "Your Name",
      type: "text",
      fieldName: "username",
      placeholder: "",
      register: register,
      errors: formErrors && formErrors.username,
    },
  };

  return [inputs, handleSubmit, onSubmit, loading];
};
