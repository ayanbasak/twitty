import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validation/schemas";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated, getAuthenticationDetails } from "../../redux/actions/authentication.action";
import { useNavigate } from "react-router-dom";
import userService from "../../Services/user.service";

export const useLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(loginSchema) });
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const [formErrors, setFormErrors] = useState(errors);
  const [loading, setLoading] = useState(false);
  // const authorization = useSelector((state) => state.authorization);
  // console.log("--- useLogin authorization ----- " + JSON.stringify(authorization));
  useEffect(() => {
    setFormErrors(errors);
  }, [errors]);

  const onSubmit = async (data) => {
    // console.log(">>> useLogin:  " + JSON.stringify(data)); // {"email":"xavier.academy","password":"123"}
    let params = {
      email: data.email,
      password: data.password,
    };

    setLoading(true);
    let { response, error } = await userService.loginUser(params);
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
      };
      if (error.email) {
        err.email.message = error.email;
      }
      if (error.password) {
        err.password.message = error.password;
      }
      setFormErrors(err);
    } else {
      // console.log(" ---- registration successfull response 2000 ----");
      // console.log(response);
      let authenticationData = {
        isAuthenticated: true,
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      };
      // console.log("---2 useLogin authorization ----- " + JSON.stringify(authorization));
      dispatch(setIsAuthenticated(authenticationData));
      nevigate("/");
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
  };

  return [inputs, handleSubmit, onSubmit, loading];
};
