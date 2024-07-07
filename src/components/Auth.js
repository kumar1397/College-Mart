import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../contexts/AuthContext";

const Auth = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const notify = (message, type) => {
    if (type === "error") {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  // Signup state
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
  });

  // Handle input change for signup
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // Signup function
  const postData = async (e) => {
    e.preventDefault();
    console.log("submit clicked");
    const res = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (
      res.status === 400 ||
      res.status === 422 ||
      res.status === 421 ||
      res.status === 500
    ) {
      notify(data.message, "error");
    } else {
      notify("Registration successful. Please login to enter", "success");
      setTimeout(() => {
        toggleVisible();
      }, 2000);
    }
  };

  // Login state
  const [lguser, setLgUser] = useState({
    email: "",
    password: "",
  });

  // Handle input change for login
  const LoginInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLgUser({ ...lguser, [name]: value });
  };

  // Login function
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lguser),
    });

    const data = await res.json();

    if (
      res.status === 400 ||
      res.status === 401 ||
      res.status === 403 ||
      res.status === 500
    ) {
      notify(data.message, "error");
    } else {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      login(data.user, data.token);

      notify("Login successful", "success");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#000] flex justify-center items-center">
      <div className="w-10/12 h-10/12 text-[white] flex flex-row">
        <div className="leftdiv w-1/2  h-[80vh]">
          <div
            className={`login w-full h-full ${
              visible ? "flex" : "hidden"
            } flex justify-center items-center bgblackAuth`}
          >
            <div className="w-10/12 h-full flex flex-col gap-12 justify-center">
              <div className="first flex flex-col">
                <span className="text-4xl font-bold">Login</span>
                <span className="text-lg font-md">
                  Enter your account details
                </span>
              </div>
              <div className="w-full">
                <form
                  method="POST"
                  className="bg-transparent flex flex-col gap-3"
                >
                  <div className="input-box">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={lguser.email}
                      onChange={LoginInput}
                      required
                      className="bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]"
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={lguser.password}
                      onChange={LoginInput}
                      className="bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]"
                    />
                  </div>
                  <div className="link my-5 text-[#6d6d6d] font-medium cursor-pointer ">
                    <a>forget password?</a>
                  </div>
                  <div>
                    <button
                      type="login"
                      onClick={handleLogin}
                      className="w-8/12 h-10 bg-[#9C6FE4] rounded-lg text-lg font-semibold"
                    >
                      <span>Login</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex flex-row gap-12 mt-7 items-center">
                <span>Dont have an account ?</span>
                <button
                  className="text-md font-medium w-24 h-10 bg-[#333437] rounded-md"
                  onClick={toggleVisible}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
          <div
            className={`bgcolorAuth w-full h-[80vh] ${
              visible ? "hidden " : "block"
            } `}
          ></div>
        </div>
        <div className="rightdiv w-1/2 h-[80vh] ">
          <div
            className={`signup w-full h-full flex justify-center items-center bgblackAuth ${
              visible ? "hidden " : "flex"
            } transition-all duration-700`}
          >
            <div className="w-10/12 h-full flex flex-col gap-12 justify-center">
              <div className="first flex flex-col">
                <span className="text-4xl font-bold">Sign Up</span>
                <span className="text-lg font-md">Enter your details</span>
              </div>
              <div className="w-full">
                <form
                  method="POST"
                  className="bg-transparent flex flex-col gap-3"
                >
                  <div className="input-box">
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                      value={user.name}
                      onChange={handleInput}
                      className="bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]"
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      required
                      value={user.phone}
                      onChange={handleInput}
                      className="bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]"
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                      value={user.email}
                      onChange={handleInput}
                      className="bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]"
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={handleInput}
                      className="bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]"
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      placeholder="Confirm Password"
                      value={user.cpassword}
                      onChange={handleInput}
                      className="bg-transparent w-8/12 h-10 border-b-[1px] border-[#D9D9D9]"
                    />
                  </div>
                  <div className="link my-5 text-[#6d6d6d] font-mediumn cursor-pointer ">
                    <a>forget password?</a>
                  </div>
                  <div onClick={postData}>
                    <button
                      type="signup"
                      className="w-8/12 h-10 bg-[#9C6FE4] rounded-lg text-lg font-semibold"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex flex-row gap-12 mt-7 items-center">
                <span>Already have an account ?</span>
                <button
                  className="text-md font-medium w-24 h-10 bg-[#333437] rounded-md"
                  onClick={toggleVisible}
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
          <div
            className={`bgcolorAuth w-full h-[80vh]  ${
              visible ? "block " : "hidden"
            } `}
          ></div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Auth;
