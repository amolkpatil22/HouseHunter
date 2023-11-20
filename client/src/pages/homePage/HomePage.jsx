import React from 'react'
import Navbar from '../../components/Navbar'
import TopSection from '../../HomeComponents/TopSection'
import { Sliders } from '../../HomeComponents/Sliders'
import BottomPart from '../../HomeComponents/BottomPart'
import BottomImage from '../../HomeComponents/BottomImage'
import Footer from '../../components/Footer'
import FAQAccordion from '../../HomeComponents/FrequentQuestions'

const HomePage = () => {
  return (
    <div>
        <TopSection/>
        <Sliders/>
        <BottomPart/>
        <FAQAccordion/>
        {/* <Footer/> */}
        <BottomImage/>
        
    </div>
  )
}

export default HomePage