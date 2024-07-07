import Auth from "./components/Auth";
import Hero from "./components/hero/Hero";
import Home02 from "./components/new-home-page/parent";
import { AuthProvider } from "./contexts/AuthContext";
import ContactUs from "./components/contact-us/contact";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProductFormCard from "./components/product/newProduct";
import Profile from "./components/profile/profile";

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
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
