import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
const Auth = () => {
    const [visible,setVisible] = useState(true);
    function toggleVisible(){
        setVisible(!visible);
    }

    //signup
    const [user,setUser] = useState({
        name:'',phone:'',email:'',password:'',cpassword:'',
    })
    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setUser({...user,[name]:value})
    }
    const postData = async(e) =>{
        e.preventDefault();
        console.log("submit clicked")
        const res = await fetch("http://localhost:4000/signup",{
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body:JSON.stringify(user),  
        })
        const data = await res.json();
        if (data.status === 400){
            window.alert(`no registration`)
        }
        if (data.status === 422){
            window.alert(`user already exists`);
        }
        else if (data.status === 400){
            window.alert('user can not be registerd.Please try again later')
        }
        else{
            window.alert(`registration successful`);
            window.alert(`please login to enter`);
        }
    }
    //login 
    const [lguser,setLgUser] = useState({
        email:'',password:'',
    })
    const LoginInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setLgUser({...lguser,[name]:value})
    }
    const handleLogin = async(e) =>{
        e.preventDefault();
        const res = await fetch ('http://localhost:4000/signin',{
            method:'POST',
            headers :{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(lguser)
        });
        const data = res.json();
        if (data.status === 400){
            window.alert(`please fill all the details carefully`)
            console.log(`please fill all the details carefully`)
        }
        if (data.status === 401){
            window.alert(`user is not registered`)
            console.log(`user is not registered`)
        }
        if (data.status === 403){
            window.alert(`incorrect password`)
            console.log(`incorrect password`)
        }
        if (data.status === 500){
            window.alert(`Login failure`)
            console.log(`Login failure`)
        }
        else{
            window.alert('Login successful')
            console.log('Login successful')
        }
    }
    return (
        <div className='w-screen h-screen bg-[#000] flex justify-center items-center'>
            <div className='w-10/12 h-10/12 text-[white] flex flex-row'>
                <div className='leftdiv w-1/2  h-[80vh]'>
                    <div className={`login w-full h-full ${visible ? "flex" : "hidden" } flex justify-center items-center bgblackAuth `}>
                        <div className="w-10/12 h-full flex flex-col gap-12 justify-center">
                            <div className="first flex flex-col">
                                <span className='text-4xl font-bold'>Login</span>
                                <span className='text-lg font-md'>Enter your account details</span>
                            </div>
                            <div class="card" className='w-full'>
                                <form method='POST' className='bg-transparent flex flex-col gap-3'>
                                    <div class="input-box">
                                        <input type="email" name="email" id="email" placeholder="Email" value={lguser.email} onChange={LoginInput} required className='bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]'/>
                                    </div>
                                    <div className="input-box">
                                        <input type="password" name="password" id="password" placeholder="Password" value={lguser.password} onChange={LoginInput} className='bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]' />
                                    </div>
                                    <div className="link my-5 text-[#6d6d6d] font-medium "><a>forget password?</a></div>
                                    <div><button type="login" onClick={handleLogin} className='w-8/12 h-10 bg-[#9C6FE4] rounded-lg text-lg font-semibold'><span>Login</span></button></div>

                                </form>
                            </div>
                            <div className='flex flex-row gap-12 mt-7 items-center'>
                                <span>Dont have an account ?</span>
                                <button className='text-md font-medium w-24 h-10 bg-[#333437] rounded-md' onClick={toggleVisible}>Sign up</button>
                            </div>
                        </div>
                    </div>
                    <div className={`bgcolorAuth w-full h-[80vh] ${visible? "hidden " : "block"} `}></div>
                </div>
                <div className='rightdiv w-1/2 h-[80vh] '>
                    <div className={`signup w-full h-full flex justify-center items-center bgblackAuth ${visible? "hidden " : "flex"} transition-all duration-700`}>
                        <div className="w-10/12 h-full flex flex-col gap-12 justify-center">
                            <div className="first flex flex-col">
                                <span className='text-4xl font-bold'>Sign Up</span>
                                <span className='text-lg font-md'>Enter your details</span>
                            </div>
                            <div class="card" className='w-full'>
                                <form method='POST' className='bg-transparent flex flex-col gap-3'>
                                    <div class="input-box">
                                        <input type="name" name="name" id="name" placeholder="Name" required value={user.name} onChange={handleInput} className='bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]'/>
                                    </div>
                                    <div class="input-box">
                                        <input type="number" name="phone" id="phone" placeholder="Phone Number" required value={user.phone} onChange={handleInput} className='bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]'/>
                                    </div>
                                    <div class="input-box">
                                        <input type="email" name="email" id="email" placeholder="Email" required value={user.email} onChange={handleInput} className='bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]'/>
                                    </div>
                                    <div className="input-box">
                                        <input type="password" name="password" id="password" placeholder="Password" value={user.password} onChange={handleInput} className='bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]' />
                                    </div>
                                    <div className="input-box">
                                        <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" value={user.cpassword} onChange={handleInput} className='bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]' />
                                    </div>
                                    <div className="link my-5 text-[#6d6d6d] font-medium "><a>forget password?</a></div>
                                    <div onClick={postData} ><button  type="signup" className='w-8/12 h-10 bg-[#9C6FE4] rounded-lg text-lg font-semibold' >Sign up</button></div>

                                </form>
                            </div>
                            <div className='flex flex-row gap-12 mt-7 items-center'>
                                <span>Already have an account ?</span>
                                <button className='text-md font-medium w-24 h-10 bg-[#333437] rounded-md' onClick={toggleVisible}>Log in</button>
                            </div>
                        </div>
                    </div>
                    <div className={`bgcolorAuth w-full h-[80vh]  ${visible ? "block " : "hidden" } `}></div>
                </div>
            </div>
        </div>
    )
}
export default Auth;