import React from 'react'
import './App.css'

export default function cardcomponent(props) {
  return (
    <div className='complete-card'>
    <div className='cards'>
      {/* <h1 className=''></h1> */}
    </div>
    <div>{props.name}</div>
    <div>{props.price}</div>
    </div>
  )
}
