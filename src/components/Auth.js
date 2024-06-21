// import React, { useState } from 'react'

// const Auth = () => {
//     const [visible,setVisible] = useState(true);
//     function toggleVisible(){
//         setVisible(!visible);
//     }
//     return (
//         <div className='w-screen h-screen bg-[#000] flex justify-center items-center'>
//             <div className='w-10/12 h-10/12 text-[white] flex flex-row'>
//                 <div className='leftdiv w-1/2  h-[80vh]'>
//                     <div className={`login w-full h-full ${visible ? "flex" : "hidden" } flex justify-center items-center bgblackAuth `}>
//                         <div className="w-10/12 h-full flex flex-col gap-12 justify-center">
//                             <div className="first flex flex-col">
//                                 <span className='text-4xl font-bold'>Login</span>
//                                 <span className='text-lg font-md'>Enter your account details</span>
//                             </div>
//                             <div class="card" className='w-full'>
//                                 <form action="#" className='bg-transparent flex flex-col gap-3'>
//                                     <div class="input-box">
//                                         <input type="email" name="email" id="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} required className='bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]'/>
//                                     </div>
//                                     <div className="input-box">
//                                         <input type="password" name="password" id="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} className='bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]' />
//                                     </div>
//                                     <div className="link my-5 text-[#6d6d6d] font-medium "><a>forget password?</a></div>
//                                     <div><button id="btn" type="login" className='w-8/12 h-10 bg-[#9C6FE4] rounded-lg text-lg font-semibold'><span>Login</span></button></div>

//                                 </form>
//                             </div>
//                             <div className='flex flex-row gap-12 mt-7 items-center'>
//                                 <span>Dont have an account ?</span>
//                                 <button className='text-md font-medium w-24 h-10 bg-[#333437] rounded-md' onClick={toggleVisible}>Sign up</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={`bgcolorAuth w-full h-[80vh] ${visible? "hidden " : "block"} `}></div>
//                 </div>
//                 <div className='rightdiv w-1/2 h-[80vh] '>
//                     <div className={`signup w-full h-full flex justify-center items-center bgblackAuth ${visible? "hidden " : "flex"} transition-all duration-700`}>
//                         <div className="w-10/12 h-full flex flex-col gap-12 justify-center">
//                             <div className="first flex flex-col">
//                                 <span className='text-4xl font-bold'>Sign Up</span>
//                                 <span className='text-lg font-md'>Enter your details</span>
//                             </div>
//                             <div class="card" className='w-full'>
//                                 <form action="#" className='bg-transparent flex flex-col gap-3'>
//                                     <div class="input-box">
//                                         <input type="name" name="name" id="name" onChange={(e)=>{}} placeholder="Name" required className='bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]'/>
//                                     </div>
//                                     <div class="input-box">
//                                         <input type="number" name="number" id="number" placeholder="Phone Number" required className='bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]'/>
//                                     </div>
//                                     <div class="input-box">
//                                         <input type="email" name="email" id="email" placeholder="Email" required className='bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]'/>
//                                     </div>
//                                     <div className="input-box">
//                                         <input type="password" name="password" id="password" placeholder="Password" className='bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]' />
//                                     </div>
//                                     <div className="link my-5 text-[#6d6d6d] font-medium "><a>forget password?</a></div>
//                                     <div><button id="btn" type="login" className='w-8/12 h-10 bg-[#9C6FE4] rounded-lg text-lg font-semibold' >Sign up</button></div>

//                                 </form>
//                             </div>
//                             <div className='flex flex-row gap-12 mt-7 items-center'>
//                                 <span>Already have an account ?</span>
//                                 <button className='text-md font-medium w-24 h-10 bg-[#333437] rounded-md' onClick={toggleVisible}>Log in</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={`bgcolorAuth w-full h-[80vh]  ${visible ? "block " : "hidden" } `}></div>
//                 </div>

//             </div>
//         </div>
//     )
// }
// export default Auth;