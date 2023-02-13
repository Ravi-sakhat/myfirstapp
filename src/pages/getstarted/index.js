import { Routes, useLocation, useNavigate } from "react-router";
import { Route } from "react-router";
import Layout from "../../layout/layout";
import React from 'react'
import Header from "../../layout/header/Header";
import GetStarted from "./GetStarted";
import Home from "../home/Home";
import Footer from "../../layout/footer/Footer";
import Job from "../job/Job";
import Schemes from "../schemes/Schemes"
import Learn from "../learn/Learn";
import viewAllCourse from "../course/viewAllCourse";








const Pages = () => {

        return (
            <>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/getstarted" element={<GetStarted />} />
                        <Route path="/job" element={<Job/>}/>
                        <Route path="/scheme" element={<Schemes/>}/>
                        <Route path="/learn" element={<Learn/>}/>
                        <Route path="/viewAllNews" element={<viewAllNews/>}/>
                        <Route path="/viewAllCourse" element={<viewAllCourse/>}/>
                    </Routes>
                <Footer/>
                
            </>
        )
    }

// }

export default Pages