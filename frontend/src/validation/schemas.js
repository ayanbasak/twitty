import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().required("Please Provide Your Email"),
    password: yup.string().required("Please Provide a Password"),
    // age: yup.number().positive().integer().required(),
  })
  .required();

export const registrationSchema = yup
  .object({
    email: yup.string().required("Please Provide Your Email"),
    password: yup.string().required("Please Provide a Password"),
    confirmPassword: yup.string().required("Please reenter Your Password"),
    username: yup.string().required("Please Enter Your Name"),
  })
  .required();
