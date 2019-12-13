import React, { Component } from 'react'
import defaultBCG from '../images/room-1.jpeg'
import Hero from './Components/hero';
import Banner from './Components/banner';
import { Link } from 'react-router-dom';
import { RoomContext } from './context'
import StyledHero from './simpleButton'

export default class SingleRoom extends Component{
    constructor(props){
        super(props);
        console.log(this.props,'props');
        this.state={
            slug: this.props.match.params.slug,
            defaultBCG
        }
    }
    static contextType = RoomContext;
    componentDidMount(){

    }
    render(){
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        console.log('yyy',room)
        let { name, description, capacity, size, price, extras,
            breakfast, pets,  } = room ;
        if(!room){
            return<div className='error' >
                <h3>no no such room could be found</h3>
                <Link to ='/rooms' className='btn-primary'>Back to Rooms</Link>
            </div>
        }
       console.log('room.name',name);
       let images = room.map(i=>i.images);
       let [mainImg, ...defaultImg] = images
       console.log('imaggg',defaultImg)
        return(
            <>
           <StyledHero img={room.map(i=>i.images[0] )} >
               <Banner
               title={`${room.map(i=>i.name )} room`}
               >
            <Link to ='/rooms' className='btn-primary'>Back to Rooms</Link>
               </Banner>
           </StyledHero>
           <section className='single-room'>
               <div className='single-room-images'>
                   {
                      room.map(i=>i.images.map((val,ind)=>{
                    
                         if(ind != 0){
                             return<img key={ind} src={val} alt={room.map(i=>i.name)}/>
                            }
                      }))
                   }
               </div>
               <div className='single-room-info'>
                   <article className='desc'>
                       <h3>Description</h3>
                       <p>{ room.map(i=>i.description)}</p>
                   </article>
                   <article className='info'>
                       <h3>info</h3>
                       <h6>price : ${room.map(i=>i.price)}</h6>
                       <h6>size : ${room.map(i=>i.size)}SQFT</h6>
                       <h6>
                           max capacity :{' '}
                           {
                               room.map(i=>i.capacity) > 1 ? `${room.map(i=>i.capacity)} people`:
                               `${room.map(i=>i.capacity)} person`
                           }
                       </h6>
                       <h6>
                           {room.map(i=>i.pets)? 'peta allowed':"no pets"}

                       </h6>
                       <h6>
                           {
                               room.map(i=>i.breakfast) && 'free breakfast'
                           }
                       </h6>
                   </article>
               </div>
           </section>
           <section className='room-extras'>
               <h6></h6>
               <ul className='extras'>
               {room.map(i=>i.extras.map((k,u)=>{
                   return<li key={u} >{k}</li>
               }))}
               </ul>
           </section>
               </>
        )
    }
}