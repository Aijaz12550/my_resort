import React from 'react'
import Hero from './Components/hero'
import Banner from './Components/banner'
import { Link } from 'react-router-dom'
import Services from './Components/services'
import Room from './Components/room'
import FeaturedRooms from './Components/featuredRooms'
import Button from './simpleButton'

const Home = () => {
    return<>
    <Hero >
        <Banner 
        title='Luxurious Rooms'
        subtitle='5 star rooms starting at $200'>
            <Link to ='/rooms' className='btn-primary'>
                Our Rooms
            </Link>
        </Banner>
    </Hero>
    <Services/>
    <FeaturedRooms/>
    </>
}
export default Home