import React from "react"
import './login.css';
import { MdEmail } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
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
        <i className="fa-solid fa-user  right-[50px]"><MdEmail /></i>
      </div>
      <div className="input-box">
        <input type="password" name="password" id="password" placeholder="password" required/>
        <i className="fas fa-3x absolute right-48"><FaEyeSlash /></i>
      </div>
      <div className="link">
        <a>forget password?</a>
      </div>
        <button id="btn" type="login"><span>Login</span></button>
    </form>
  </div>
  <div className="dont-have-account">Dont have an account ?</div>
  <div className="signup">
    <button>Sign up</button>
  </div>
  
        </div>
    </>)
}