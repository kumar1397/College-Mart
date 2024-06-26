import Auth from './components/Auth'
import Home from './components/home-page/home'
import Hero from './components/Hero'
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import ProductFormCard from './components/product/ProductCard';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>

    </div>

  )
}

export default App;
