import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from '../../component/slider/Slider'
import img from '../../assests/img/img/6gan.png'
import { useNavigate } from 'react-router-dom'
import Loginmodal from '../../component/modals/Loginmodal'
import AquireCard from '../../common/AquireCard'
import JobCard from '../../common/JobCard'





const Home = () => {

  const navigate = useNavigate()


  const [loginmodal, setloginmodal] = useState(false)

  const growtogathercard = [
    {
      img: `${img}`,
      text: "Courses & Skills to upskill women",
      alts: "healthcare",
      link: "learn"
    },
    {
      img: `${img}`,
      text: "Discover Jobs",
      alts: "Discover Jobs",
      link: "job"
    },
    {
      img: `${img}`,
      text: "Explore 200+ Govt Schemes",
      alts: "govt scheme",
      link: "scheme"
    },
    {
      img: `${img}`,
      text: "Latest News & Updates",
      alts: "latest news",
      link: "viewAllNews"
    },
  ]

  const handleGetStarted = () => {
    navigate("/getstarted")
  }

  return (
    <div>
      <Slider />
      <div>
        <h2 className='my-2 text-center'>LET’S GROW TOGETHER</h2>
      </div>
      <Row >
        {
          growtogathercard.map((item, i) => (
            <Col xl={3} lg={3} md={6} sm={6} key={i} className={"d-flex justify-content-center"}>
              <div className="card" style={{ width: "18rem", cursor: "pointer" }} onClick={() => navigate(`/${item.link}`)}>
                <img src={item.img} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h5 className="card-title">{item.text}</h5>
                </div>
              </div>
            </Col>
          ))
        }
      </Row>
      <Container>
        <div className='h-100 d-flex align-items-center justify-content-center my-2 border border-dark rounded-1'>
          <h1 className='mx-2'> <span> Discover boundaryless</span><span className="span2"> career opportunities </span></h1>
          <button type="button" className="btn btn-danger my-2" onClick={handleGetStarted}>Get Started</button>
        </div>
      </Container>
      <Container>
        <div>
          <h3 className='text-center'>ACQUIRE NEW SKILLS</h3>
        </div>
        <AquireCard />
      </Container>
      <Container>
        <div>
          <h3 className='text-center'>DISCOVER NEW OPPORTUNITIES</h3>
        </div>
        <JobCard/>
      </Container>
    </div>
  )
}

export default Home