import React from 'react'
import { useSelector } from "react-redux";
import Home from "../../components/home/Home";
import Dashboard from "../../components/dashboard/Dashboard";

export const RootRoute = () => {
    const authorization = useSelector((state) => state.authorization);
    if(!authorization.isAuthenticated){
        return <Dashboard/>
    }else{
        return <Home/>
    }
}
