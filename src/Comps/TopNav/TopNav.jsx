import React from 'react'
import {MdOutlineNotificationsNone} from 'react-icons/md';
import {FaRegEnvelope} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
const TopNav = () => {
  return (
    <div className='topnav'>
        <div className='top-left'>
            <input type="text" placeholder='search'/>
            <BsSearch className='search-btn'/>
        </div>


        <div className='right-nav'>
            <div className='icons'>
                <FaRegEnvelope className='icon1'/>
                <MdOutlineNotificationsNone className='icon1'/>
            </div>

            <div className='users'>
                <div className='info'>
                    <h1>john doe</h1>
                 
                    <p>member</p>
                </div>

                <div className='img'>
                    <img src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='profile' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopNav