import React, {useState} from 'react';
import { useLogin } from './useLogin';
import { Input, SubmitButton } from '../sub-components';

export const Login = () => {
    const [inputs, handleSubmit, onSubmit] = useLogin();  
   
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input {...inputs.email} />
                <Input {...inputs.password} />  
                             
                <SubmitButton />
            </form>
        </div>
    )
}

// process.env.REACT_APP_ROUTER_BASE

