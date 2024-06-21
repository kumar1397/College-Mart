import React from 'react'
import group from './assets/group.png'
import './App.css';
// import cardcomponent from './cardcomponent';
import Cardcomponent from './cardcomponent'

export default function home() {
  return (
    <>
    <div className="header">
      <nav>
        <ul>
        <li><a href='https://www.google.co.in/maps'>Home</a></li>
        <li><a href='https://www.google.co.in/maps'>Shop</a></li>
        <li><a href='https://www.google.co.in/maps'>Blog</a></li>
        <li><a href='https://www.google.co.in/maps'>About us</a> </li>
        </ul>
      </nav>
      <div className='lower-header'>
        <div className='title'>
            <div className='title-text a'>College-Mart</div>
            <div className='title-text'>one stop solution</div>
        </div>
      <div className='header-image'>
        <img src={group} alt='ph' className='group-image'/>
      </div>
      </div>
      </div>
      <div className='cards-show'>
      <Cardcomponent name="" price="" />
      <Cardcomponent/>
      <Cardcomponent/>
      <Cardcomponent/>
      </div>
      </>
  );
}
