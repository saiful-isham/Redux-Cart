
import { Route, Routes,Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import View from './pages/View'
import { Provider } from 'react-redux'

function App() {
 

  return (
    <>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/:id/view' element={<View/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>} />
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
