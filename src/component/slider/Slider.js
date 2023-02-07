import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarousel } from '../../redux/action/carouselAction'

const Slider = () => {
    const dispatch = useDispatch()
    const carouselData = useSelector((state) => state.carouselData.getCarousel)

    useEffect(() => {
        dispatch(getCarousel())
        console.log('carouselData', carouselData)
    }, [])

    return (
        <div>Slider</div>
    )
}

export default Slider