import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getJobDataAction } from '../redux/action/getJobDataAction'
import { Row, Col } from 'react-bootstrap'
import StarRatings from "react-star-ratings";


const JobCard = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getJobData = useSelector((state) => state.getJobData.getJob)

    const [JobData, setJobData] = useState([])
    const [avgRating, setAvgRating] = useState(0);
    const [showShare, setshowShare] = useState(false)


    useEffect(() => {
        dispatch(getJobDataAction())
    }, [])

    useEffect(() => {
        if (getJobData && getJobData.data) {
            setJobData(getJobData.data.slice(0, 3))
        }
    }, [getJobData])

    const redirectjobs = () => {
        navigate("/viewAllJobs")
    }

    return (
        <div>
            <Row>
                {JobData && JobData.length > 0 ? JobData.map((item, i) => (
                    <>
                        <Col key={i}>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src={item.url} class="card-img-top" alt="image" />
                                <div class="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <button className='btn btn-secondary' onClick={() => setshowShare(!showShare)}><i class="bi bi-share"></i></button>
                                    {
                                        showShare &&
                                        <ul class="list-group my-1">
                                            <li class="list-group-item" >Facebook <i class="bi bi-facebook"></i></li>
                                            <li class="list-group-item">Linkedin <i class="bi bi-linkedin"></i></li>
                                            <li class="list-group-item">Twitter <i class="bi bi-twitter"></i></li>
                                            <li class="list-group-item">What'sApp <i class="bi bi-whatsapp"></i></li>
                                        </ul>
                                    }
                                    <button className='btn btn-primary mx-5'><i class="bi bi-file-arrow-down-fill"></i>Save</button>
                                </div>
                                <div class="card-body">
                                    <span onClick={() => navigate("/getsinglecourse")} style={{ cursor: "pointer" }}>Apply Now</span>
                                    <i class="bi bi-arrow-right"></i>
                                    <StarRatings
                                        rating={avgRating}
                                        starRatedColor="#C90F22"
                                        numberOfStars={5}
                                        name="scheme"
                                        starDimension="22px"
                                    />
                                   <i class="bi bi-geo-alt mx-4"></i>
                                </div>
                            </div>
                        </Col>
                    </>
                ))
                    : <></>}
            </Row>
            <div className='d-flex justify-content-center my-2'>
                {JobData.length ? <button type="button" class="btn btn-danger" onClick={() => redirectjobs()}>View All</button> : <></>}
            </div>
        </div>
    )
}

export default JobCard