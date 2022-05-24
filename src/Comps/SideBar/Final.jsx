import React from 'react'
import {NavLink} from 'react-router-dom';
import {MdDashboard} from 'react-icons/md';
import {MdOutlineRequestQuote} from 'react-icons/md';
import {FaUserAlt} from 'react-icons/fa';
import {MdOutlineManageSearch} from 'react-icons/md';
import {AiTwotoneSetting} from 'react-icons/ai';
const Final = () => {
  return (
    <div className='wrapped-sidebar'>
    
        <NavLink activeClassName="active" to='/' style={{textDecoration:"none",color:"black",display:"flex",alignItems:"center"}} ><div className='actual-sidebar'>
          <p>
            <MdDashboard/>
          </p>
          <h1>Dashboard</h1>
        </div>
        </NavLink>

        <NavLink to='/quotation' style={{textDecoration:"none",color:"black",display:"flex",alignItems:"center"}}><div className='actual-sidebar'>
          <p><MdOutlineRequestQuote/></p>
          <h1>Quotation</h1>
        </div>
        </NavLink>

        <NavLink to='/Profile' style={{textDecoration:"none",color:"black",display:"flex",alignItems:"center"}}><div className='actual-sidebar'>
          <p><FaUserAlt/></p>
          <h1>Profile</h1>
        </div>
        </NavLink>

        <NavLink to='/order' style={{textDecoration:"none",color:"black",display:"flex",alignItems:"center"}}><div className='actual-sidebar'>
          <p><MdOutlineManageSearch/></p>
          <h1>Order</h1>
        </div>
        </NavLink>

        <NavLink to='/setting' style={{textDecoration:"none",color:"black",display:"flex",alignItems:"center"}}><div className='actual-sidebar'>
          <p><AiTwotoneSetting/></p>
          <h1>Settings</h1>
        </div>
        </NavLink>
 
    </div>
  )
}

export default Final