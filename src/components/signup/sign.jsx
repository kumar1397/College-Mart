import React from "react"
import './sign.css';
export default function SignUp (){

    return(
        <>
         <div className="login">
         <div className="first">
          <h1>Signup</h1>
          <h2>Enter your details</h2>
         </div>

         <div class="card">
    <form action="#">
         <div class="input-box">
         <input type="name" name="name" id="email" placeholder="Name" required />
     
         </div>
        <div className="input-box">
        <input type="rollnumber" name="rollnumber" id="password" placeholder="Roll number" required/>
         </div>
         <div className="input-box">
        <input type="Email" name="Email" id="password" placeholder="E-mail" required/>
         </div>
         <div className="input-box">
        <input type="Hallname" name="Hallname" id="password" placeholder="Hall name" required/>
         </div>
         <div className="input-box">
        <input type="roomnumber" name="roomnumber" id="password" placeholder="Room number" required/>
         </div>
         <div className="input-box">
        <input type="mobile" name="mobile" id="password" placeholder="mobile number" required/>
         </div>
         <div className="input-box">
        <input type="password" name="password" id="password" placeholder="password" required/>
         </div>
         <button id="btn" type="login"><span>Sign up</span></button>
          </form>
         </div>
        </div>
        </>
    )
}