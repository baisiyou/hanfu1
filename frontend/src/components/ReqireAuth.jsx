import React from 'react'
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useUserContext } from '../context/usercontext';


const ReqireAuth = () => {
    const { isAuthenticated } = useUserContext()
    const location = useLocation()

    return (
        isAuthenticated
            ? <Outlet />
            : <Navigate to='/' state={{from: location}} replace />
    )
}

export default ReqireAuth