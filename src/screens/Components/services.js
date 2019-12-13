import React, { Component } from 'react'
import Title from './title'
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa'

import { Link } from 'react-router-dom'

export default class Services extends Component{
  state={
      services:[
          {
              icon:<FaCocktail/>,
              title:'free coctail',
              info:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaan\
              ssssssssssssssssssssssssssssssss'
          },
          {
            icon:<FaHiking/>,
            title:'free Hiking',
            info:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaan\
            ssssssssssssssssssssssssssssssss'
        },
        {
            icon:<FaShuttleVan/>,
            title:'free Shuttle',
            info:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaan\
            ssssssssssssssssssssssssssssssss'
        },
        {
            icon:<FaBeer/>,
            title:'free Beer',
            info:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaan\
            ssssssssssssssssssssssssssssssss'
        },
      ]
  }
    render(){
        return(
            <section className='services'>

            <Title title='services'/>
                <div className='services-center' >
                    {this.state.services.map((item,index)=>{
                        return<article key={index} className='service'>
                            <span className='icon'>
                                {item.icon}
                            </span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
            </div>
            </section>

        )
    }
}