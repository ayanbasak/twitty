import React from 'react'

export const Test = () => {
  return (
    <div>
    </div>
  )
}


/*
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions/user.action";

export const Test = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const user = useSelector((state) => state.user.user);
    console.log(user);

    return (
        <div>{user && <h1> Hello, {user.firstName} </h1>}</div>
    )
}
*/