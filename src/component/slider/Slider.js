import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarousel } from '../../redux/action/carouselAction'
import { useEffect, useState } from 'react'

// const baseURL = "https://jsonplaceholder.typicode.com/posts"

const Slider = () => {

    const [carousle, setcarousle] = useState([])

    const dispatch = useDispatch()
    const carouselData = useSelector((state) => state.carouselData.getCarousel)
    console.log('carouselData', carouselData)

    useEffect(() => {
        dispatch(getCarousel())
    }, [])

    useEffect(() => {
        if (carouselData && carouselData.data) {
            setcarousle(carouselData.data.slice(0, 1))
        }
    }, [carouselData])


    // React.useEffect(() => {
    //     axios.get(baseURL).then((response) => {
    //       console.log(response.data);
    //     });
    //   }, []);

    const styles = {
        width : "100%",
        height: "700px"
    }


    return (
        <div>
            {/* <div id="carouselExample" classNameNameName="carousel slide">
                <div classNameNameName="carousel-inner"> */}

            {carousle && carousle.length > 0 ? carousle.map((item, i) =>
                <>
                    {/* <img src={item.url} alt="" style={{ "width": "100%", "height": "700px" }} classNameNameName='slider-bg' key={i} />
                            <div classNameNameName="learn-hearo-text">
                                <div classNameNameName="set-slider-text ps-4">
                                    <h3>
                                        {item.title}
                                    </h3>
                                </div>
                                <button classNameNameName="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span classNameNameName="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span classNameNameName="visually-hidden">Previous</span>
                                </button>
                                <button classNameNameName="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span classNameNameName="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span classNameNameName="visually-hidden">Next</span>
                                </button>
                            </div> */}

                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={item.url} style={{height: "styles.height", width: "styles.width"}} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{item.title}</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={item.url} style={styles} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{item.title}</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={item.url} style={styles} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{item.title}</h5>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </>
            ) : <></>}
        </div>
    )
}

export default Slider