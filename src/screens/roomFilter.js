import React from 'react'
import { useContext } from 'react'
import { RoomContext } from './context'
import Title from './Components/title'

//unique val
const getUnique = (items,value)=>{
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomFilter({rooms}) {
const context = useContext(RoomContext)
console.log('===+++',context)
const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
} = context;

//unique
let types = getUnique(rooms,'type')
//add all
types = ['all',...types]
types= types.map((item,index)=>{
    return<option value={item} key={index}>{item}</option>
})
let people = getUnique(rooms,'capacity');
people=people.map((item,index)=>{
    return<option key={index} value={item}>{item}</option>
})
    return (
        <section className='filter-container'>
            <Title title='Search rooms'/>
            <form className='filter-form'>
                {/* type==== */}
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select name='type' id='type' value={type}
                    className='form-control' onChange={handleChange}
                    >
                       {types}
                    </select>
                </div>

                {/* guest */}
                 {/* type==== */}
                 <div className='form-group'>
                    <label htmlFor='type'>Guests</label>
                    <select name='capacity' id='capacity' value={capacity}
                    className='form-control' onChange={handleChange}
                    >
                       {people}
                    </select>
                </div>
                {/* +++++++++ */}
                <div className='form-group'>
                    <label htmlFor='price'>
                        Room price ${price}
                    </label>
                    <input type='range' name='price' min={minPrice}
                    max={maxPrice} id='price' value={price}
                    onChange={handleChange} className='form-control'/>
                </div>

                {/* size++++++++++++++++++++ */}
                <div className='form-group'>
                    <label htmlFor='size'>
                        Room Size
                    </label>
                   <input type='number'
                   name='minSize'
                   id='size'
                   value={minSize}
                   onChange={handleChange}
                   className='size-input'
                   />
                    <input type='number'
                   name='maxSize'
                   id='size'
                   value={maxSize}
                   onChange={handleChange}
                   className='size-input'
                   />
                </div>

                {/* extra */}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox' name='breakfast'
                        id='breakfast' checked={breakfast}
                        onChange={handleChange}/>
                        <label htmlFor='breakfast'>break fast</label>
                    </div>

                    <div className='single-extra'>
                        <input type='checkbox' name='pets'
                        id='pets' checked={pets}
                        onChange={handleChange}/>
                        <label htmlFor='breakfast'>pets</label>
                    </div>
                </div>
            </form>
        </section>
       
    )
}