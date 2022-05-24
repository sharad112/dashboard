import React from 'react'
import {AiFillDatabase} from 'react-icons/ai';
const Overview = (props) => {
  return (
   <div className='overview'>
       <p className='icon-1'>{props.icons}</p>
       <h1>{props.numbers}</h1>
       <p className='req'>{props.action}</p>
       <h3>{props.percent}</h3>
   </div>
  )
}

export default Overview;