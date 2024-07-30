import Auth from "./components/Auth";
import Hero from "./components/hero/Hero";
import Home02 from "./components/new-home-page/parent";
import { AuthProvider } from "./contexts/AuthContext";
import ContactUs from "./components/contact-us/contact";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProductFormCard from "./components/product/newProduct";
import Profile from "./components/profile/profile";
import ResetPassword from "./components/forgetPassword/resetpassword";
import ForgotPassword from "./components/forgetPassword/forgetpassword";
import Chat from "./components/chatapp/chat";
import MessageBox from "./components/chatapp/messgebox";
import HomePage from "./components/demo/HomePage";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/home" element={<Home02 />} />
            <Route path="/home/profile" element={<Profile />} />
            <Route path="/home/form" element={<ProductFormCard />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/forgot_password" element={<ForgotPassword/>} />
            <Route path="/reset/:token" element={< ResetPassword/>} />
            <Route path="/home/chat" element={< Chat/>} />
            <Route path="/home/chatbox" element={<MessageBox/>} />   
            <Route path="/products" element={<HomePage/>} />         
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
