
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from "../../validation/schemas";
import openWebService from "../../Services/openWebService";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "../../redux/actions/authentication.action";

export const useLogin = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(loginSchema)
    });
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        // {"userName":"ayan","userPassword":"88"}
        let params = new FormData();
        params.append('user_name', data.userName)
        params.append('user_password', data.userPassword)

        // console.log(" ---- login ----");
        // dispatch(setIsAuthenticated(true));

        openWebService.post('login', params)
        .then(res => {
            console.log(" ---- login ----");
            console.log(JSON.stringify(res))
            // {"user":{"userName":"ee","userFirstName":"eeee","userLastName":"eeeee","userPassword":"$2a$10$O/TGu6qnyu/hFzB7/7EnH.49wi5S8oLkmo9MxYkL1k9ZlPbXySbx.","role":[{"roleName":"User","roleDescription":"Default role for newly created record"}]},"jwtToken":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlZSIsImV4cCI6MTY0NTEyOTk4MSwiaWF0IjoxNjQ1MTExOTgxfQ.nJIpDrcsj-6pp3jzsAwkrU0z_eMhE-yONgQqpwEtZzjfa6_krnrQDlZfgnyVgIxjcwqqzbfa_r5LlErox7TvUw"}
        })
    }

    let inputs = {
        
        email: {
            label: "Email", 
            type: "text", 
            fieldName: "userName", 
            placeholder: "", 
            register: register, 
            errors: errors
        },
        password: {
            label: "Password", 
            type: "password", 
            fieldName: "userPassword", 
            placeholder: "", 
            register: register, 
            errors: errors
        }
    }  

    return [inputs, handleSubmit, onSubmit];
}