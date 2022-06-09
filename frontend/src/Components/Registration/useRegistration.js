import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from "../../validation/schemas";
import openWebService from "../../Services/openWebService";
import { useState } from "react";

export const useRegistration = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(registrationSchema)
    });

    let formInputs = {
        email: {
            label: "Email", 
            type: "text", 
            fieldName: "userName", 
            placeholder: "", 
            register: register, 
            errors: errors.userName
        },
        password: {
            label: "Password", 
            type: "password", 
            fieldName: "userPassword", 
            placeholder: "", 
            register: register, 
            errors: errors.userPassword
        },
        userFirstName: {
            label: "First Name", 
            type: "text", 
            fieldName: "userFirstName", 
            placeholder: "", 
            register: register, 
            errors: errors.userFirstName
        },
        userLastName: {
            label: "Last Name", 
            type: "text", 
            fieldName: "userLastName", 
            placeholder: "", 
            register: register, 
            errors: errors.userFirstName
        }
    }

    let [inputs, setInputs] = useState(formInputs);

    const onSubmit = (data) => {
        // {userName: 'ee', userPassword: 'eee', userFirstName: 'eeee', userLastName: 'eeeee'}
        let params = new FormData();
        params.append('user_name', data.userName)
        params.append('user_password', data.userPassword)
        params.append('first_name', data.userFirstName)
        params.append('last_name', data.userLastName)

        let { response, error } = openWebService.post('register', params)
        // if(error){
        //     console.log("---  error response 100 --- ")
        //     // this user is already present
        //     console.log(error)
        //     let err = "this email is already present"
        //     let _inputs = {
        //         ...formInputs, 
        //         email: {
        //             ...formInputs.email, 
        //             errors: { 
        //                 message: err 
        //             }
        //         }
        //     }
        //     setInputs(_inputs)            
        // }else{
        //     console.log(" ---- register ----");
        //     console.log(response)
        // }

        console.log(" ---- register main ----");
        console.log(response)

        console.log("---  error main --- ")
        console.log(error)          

    }

    

    return [inputs, handleSubmit, onSubmit];
}
