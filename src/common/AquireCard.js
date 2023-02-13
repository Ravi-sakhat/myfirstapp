import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import img from '../../assests/img/img/6gan.png'
import { useEffect, useState } from 'react'
import { getSkillAction } from '../redux/action/getSkillAction'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import StarRatings from "react-star-ratings";
import Share from '../helper/share/Share'




const AquireCard = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getSkillBannerData = useSelector((state) => state.getSkillData.getSkill)
    
    const [skillBanner, setskillBanner] = useState([])
    const [avgRating, setAvgRating] = useState(0);
    const [showShare, setshowShare] = useState(false)

    useEffect(() => {
        if (getSkillBannerData && getSkillBannerData.data) {
            setskillBanner(getSkillBannerData.data.slice(0, 3))
        }
    }, [getSkillBannerData])

    useEffect(() => {
        dispatch(getSkillAction())
    }, [])

    const redirectjobs = () => {
        navigate("/viewAllCourse")
    }

    return (
        <div>
            <Row>
                {skillBanner && skillBanner.length > 0 ? skillBanner.map((item, i) => (
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
                                </div>
                                <div class="card-body">
                                    <span onClick={() => navigate("/getsinglecourse")} style={{ cursor: "pointer" }}>Enroll Free</span>
                                    <i class="bi bi-arrow-right"></i>
                                    <StarRatings
                                        rating={avgRating}
                                        starRatedColor="#C90F22"
                                        numberOfStars={5}
                                        name="scheme"
                                        starDimension="22px"
                                    />
                                    <button className='btn btn-primary mx-1'><i class="bi bi-file-arrow-down-fill"></i>Save</button>
                                </div>
                            </div>
                        </Col>
                    </>
                ))
                    : <></>}
            </Row>
            <div className='d-flex justify-content-center my-2'>
                {skillBanner.length ? <button type="button" class="btn btn-danger" onClick={()=>redirectjobs()}>View All</button>:<></>}
            </div>
        </div>

    )
}

export default AquireCard