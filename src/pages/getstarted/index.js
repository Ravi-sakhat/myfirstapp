import { Routes, useLocation, useNavigate } from "react-router";
import { Route } from "react-router";
import GetStarted from "../getstarted"



import React from 'react'

const index = () => {

    const location = useLocation();
    let { pathname } = { ...location };
    
    if (["/", "/getstarted"].includes(pathname)) {
        return (
            <>
                <Routes>
                    <Route path="/getstarted" element={<GetStarted />} />
                </Routes>
            </>
        )
    }
}

export default index