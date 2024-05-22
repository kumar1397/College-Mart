
import React from "react";
import './main.css';
import Frame1 from './Frame1.svg'; 
import Login from "../Login/login";


export default function MainPage(){
    return(
<div class="centered-container">
    <div class="parent-div">
        <div class="box" id="firstDiv">
        <img className="img2" src={Frame1} alt="frame1" />
        </div>
        <div class="box" id="secondDiv">      
        
         <Login/>
        </div>
    </div>
</div>

 )
}