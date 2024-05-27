import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='container-fluid p-5 mt-5 w-100 bg-info'>
    <div className="d-flex justify-content-between text-white">
      <div style={{width:'400px'}} className="intro">
        <h5> <i className="fa-solid fa-truck-fast p-1"></i>FF Store</h5>
        <p>designed and built with all the love in the world </p>
        <p>code licenced luminar , docs CC by 3.0</p>
        <p>Currently v5 .3.2</p>


      </div>
      <div className="links d-flex flex-column" >
        <h5>links</h5>
        <Link to={'/'} style={{textDecoration:'none',color:'white',}}>
          Home
        </Link>
        <Link to={'/cart'} style={{textDecoration:'none',color:'white',}}>
         Cart
        </Link>
        <Link to={'/wishlist'} style={{textDecoration:'none',color:'white',}}>
         Wishlist
        </Link>
      </div>
      <div className="guides d-flex flex-column">
        <h5>Guides</h5>
        <a href="https://react.dev/" target='-black' style={{textDecoration:'none',color:'white'}}>React</a>
        <a href="https://react-bootstrap.netlify.app/" target='-black' style={{textDecoration:'none',color:'white'}}>React bootstrap</a>

        <a href="https://reactrouter.com/en/main" target='-black' style={{textDecoration:'none',color:'white'}}>React router</a>

      </div>
      <div className="contact">
        <h5>Contact Us</h5> 
        <div className='d-flex'>
          <input placeholder='Enter your Email' type="text" className='rounded me-1 p-1' />
          <button className='btn  btn-warning ms-2'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
          <a href=""target='-blank' style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter"></i></a> 
          <a href=""target='-blank' style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-facebook"></i></a> 

          <a href=""target='-blank' style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-instagram"></i></a> 
          <a href=""target='-blank' style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-linkedin"></i></a> 

          <a href=""target='-blank' style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-github"></i></a> 

          <a href=""target='-blank' style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-phone"></i></a> 


          </div>
      </div>
    </div>
    <p className='text-center mt-3'>Copyright © 2024   FF Store  </p>
    
  </div>
  )
}

export default Footer