import React, {useState} from 'react';
import { useRegistration } from './useRegistration';
import {Input, SubmitButton} from '../sub-components';

export const Registration = () => {   
    const [inputs, handleSubmit, onSubmit] = useRegistration();  

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input {...inputs.email} />
                <Input {...inputs.password} />
                <Input {...inputs.userFirstName} />
                <Input {...inputs.userLastName} />

                <SubmitButton />
            </form>
        </div>
    )
}

