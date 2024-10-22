import React from 'react'
import RightColumn from '../components/RightColumn'
import LeftColumn from '../components/LeftColumn'
import About from '../components/About'
import { useNavigate, useNavigation } from 'react-router-dom'
// import Contact from '../components/contact'
const HomePage = () => {

    return (
        <div>
            <div className='grid grid-cols-2 max-lg:grid-cols-1'>
                <LeftColumn />
                <RightColumn />
            </div>
            <About />
            {/* <Contact/> */}
        </div>
    )
}

export default HomePage
