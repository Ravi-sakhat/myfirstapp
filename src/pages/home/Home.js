import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Slider from '../../component/slider/Slider'
import img from '../../assests/img/img/6gan.png'
import { useNavigate } from 'react-router-dom'
import Loginmodal from '../../component/modals/Loginmodal'



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
              <div className="card" style={{ width: "18rem" , cursor: "pointer" }} onClick={()=> navigate(`/${item.link}`)}>
                <img src={item.img} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h5 className="card-title">{item.text}</h5>
                </div>
              </div>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Home