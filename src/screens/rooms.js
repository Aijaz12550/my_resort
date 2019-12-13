import React from 'react'
import Hero from './Components/hero'
import Banner from './Components/banner'
import { Link } from 'react-router-dom'
import RoomContainer from './roomsContainer'
const Rooms = () => {
    return<>
    <Hero hero={'roomsHero'}>
        <Banner 
        title='Our Rooms'
        >
            <Link to ='/' className='btn-primary'>
                 Return Home
            </Link>
        </Banner>
    </Hero>
<RoomContainer/>
    </>

}
export default Rooms