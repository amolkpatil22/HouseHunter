import React from 'react'
import Navbar from '../../components/Navbar'
import TopSection from '../../HomeComponents/TopSection'
import { Sliders } from '../../HomeComponents/Sliders'
import BottomPart from '../../HomeComponents/BottomPart'
import BottomImage from '../../HomeComponents/BottomImage'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <div>
        <TopSection/>
        <Sliders/>
        <BottomPart/>
        <Footer/>
        <BottomImage/>
        
    </div>
  )
}

export default HomePage