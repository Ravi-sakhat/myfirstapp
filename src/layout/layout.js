import React from 'react'
import GetStarted from '../pages/getstarted/GetStarted'
import Footer from './footer/Footer'
import Header from './header/Header'

const layout = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default layout