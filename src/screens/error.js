import React from 'react'
import Banner from './Components/banner'
import Hero from './Components/hero'
import { Link } from 'react-router-dom'
const Error = () => {
    return<Hero >
         <Banner 
        title='404'
        subtitle='Page not found'>
            <Link to ='/' className='btn-primary'>
                Return Home
            </Link>
        </Banner>
    </Hero>
}
export default Error