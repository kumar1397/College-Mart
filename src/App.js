import Auth from './components/Auth'
import Home from './components/home-page/Home'
import Hero from './components/Hero'

import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import ProductFormCard from './components/product/ProductCard';
import Profile from './components/profile/profile'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/home/profile" element={<Profile/>} />
          <Route path="/home/form" element={<ProductFormCard/>} />
        </Routes>
      </Router>

    </div>

  )
}

export default App;