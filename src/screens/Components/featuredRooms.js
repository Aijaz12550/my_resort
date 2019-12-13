import React, { Component } from 'react'
import { RoomContext } from '../context';
import Room from './room'
import Title from './title'

export default class featuredRooms extends Component {
    static contextType = RoomContext;
    render() {
        let {featuredRooms : rooms, loading, } = this.context;
        console.log('rooms',rooms)
        
        return (
            <section className='featured-rooms'>
        
               <Title title='featured rooms'>
                   <div className='featured-rooms-center'>
                       {
                           loading?'wait.......':rooms
                        }
                   </div>
               </Title>
               <div className='r_c'>

                { 
                    rooms = rooms.map(room => {
                        console.log('fff',room);
                        
                        return<Room key={room.id}  room={room} ></Room>
                    })
                }
                </div>
           </section>
        )
    }
}
