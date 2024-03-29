import React from 'react'
import Room from './Components/room'

export default function RoomList({rooms}) {
console.log('================',rooms)
    if(rooms.length === 0){

        return (
            <div className='empty-search'>
            <h3>unfortunately no rooms matched your search parameter..</h3>
        </div>
    )
}
return(

    <section className='roomslist'>
        <div className='roomslist-center'>
            {
                rooms.map(item=>{
                    return<Room key ={item.id} room = {item}/>
                })
            }
        </div>
    </section>
)
}
