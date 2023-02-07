import { Routes, useLocation, useNavigate } from "react-router";
import { Route } from "react-router";
import Layout from "../../layout/layout";
import React from 'react'
import Header from "../../layout/header/Header";
import GetStarted from "./GetStarted";
import Home from "../home/Home";

const Pages = () => {
   
        return (

            <>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/getstarted" element={<GetStarted />} />
                    </Routes>
                </Layout>
            </>
        )
    
}

export default Pages