import Auth from './components/Auth'
import Hero from './components/hero/Hero'
import Home02 from './components/new-home-page/parent';
import Contact from './components/contact-us/contact.jsx'


import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import ProductFormCard from './components/product/newProduct';
import Profile from './components/profile/profile'
// import ContactUs from './components/contact-us/contact.jsx';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/home" element={<Home02/>} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="/home/profile" element={<Profile/>} />
          <Route path="/home/form" element={<ProductFormCard/>} />
        </Routes>
      </Router>

    </div>

  )
}

export default App;