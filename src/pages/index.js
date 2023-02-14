import { Routes, useLocation, useNavigate } from "react-router";
import { Route } from "react-router";
import React from 'react'
import Header from "../layout/header/Header"
import GetStarted from "./getstarted/GetStarted";
import Home from "./home/Home"
import Footer from "../layout/footer/Footer";
import Job from "./job/Job";
import Schemes from "./schemes/Schemes"
import Learn from "./learn/Learn";
import Viewallcourse from "./course/Viewallcourse";
import NewsUpdate from "./newsUpdate/NewsUpdate";
import ViewAllJobs from "./job/ViewAllJobs";















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
                        <Route path="/viewAllCourse" element={<Viewallcourse/>}/>
                        <Route path="/viewAllNews" element={<NewsUpdate/>}/>
                        <Route path="/viewAllJobs" element={<ViewAllJobs/>}/>
                    </Routes>
                <Footer/>
                
            </>
        )
    }

// }

export default Pages