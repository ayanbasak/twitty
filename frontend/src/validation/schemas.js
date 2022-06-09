
import * as yup from "yup";

export const loginSchema = yup.object({
    userName: yup.string().required('Please Provide Your Email'),
    userPassword: yup.string().required('Please Provide a Password'),
    // age: yup.number().positive().integer().required(),
}).required();


export const registrationSchema = yup.object({
    userName: yup.string().required('Please Provide Your Email'),
    userPassword: yup.string().required('Please Provide a Password'),
    userFirstName: yup.string().required('Please Enter Your First Name'),
    userLastName: yup.string().required('Please Enter Your Last Name'),
}).required();