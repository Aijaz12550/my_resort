import React from 'react'
import RoomsFolter from './roomFilter'
import RoomList from './roomList'
import { withRoomConsumer } from './context'


function RoomContainer({context}) {
    const {
        sortedRooms,rooms
    } = context
    return (
       

        <div>
            hello from cont..
            <RoomsFolter rooms={rooms}/>
            <RoomList  rooms={sortedRooms} />
        </div>
                    
                
            
    )
}
export default withRoomConsumer(RoomContainer)
