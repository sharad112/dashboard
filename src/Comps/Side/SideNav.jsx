import React from 'react'

const SideNav = (props) => {
  return (
    <div className='actual-sidebar'>
      <p>{props.icon}</p>
      <h1>{props.text}</h1>
    </div>
  )
}

export default SideNav;