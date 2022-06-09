import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "../redux/actions/authentication.action";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        // console.log("----logout---")
        dispatch(setIsAuthenticated(false));
        navigate('/');
    }

    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Logout