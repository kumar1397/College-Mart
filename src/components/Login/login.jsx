
import React from "react"
import './login.css';
export default function Login(){

    return(
    <>
    <div className="login">
        <div className="first">
          <h1>Login</h1>
          <h2>Enter your account details</h2>
        </div>

        <div class="card">
    <form action="#">
      <div class="input-box">
        <input type="email" name="email" id="email" placeholder="email" required />
        <i class="fa-solid fa-user"></i>
      </div>
      <div class="input-box">
        <input type="password" name="password" id="password" placeholder="password" required/>
        <i class="fa-solid fa-lock"></i>
      </div>
      <div class="link">
        <a href="#">forget password?</a>
      </div>
      <div class="btn">
        <button type="submit">submit</button>
      </div>
      <div class="account">
        <p>don't have account <a href="#">sign in</a></p>
      </div>

      
    </form>
  </div>
        
        </div>
    </>)
}