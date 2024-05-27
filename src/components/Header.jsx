import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'


function Header({insideHome}) {


    const yourWishlist = useSelector(state=>state.wishlistReducer)
    const yourCart = useSelector(state=>state.cartReducer)

    const dispatch = useDispatch()
    return (
        <Navbar expand="lg" className="bg-info w-100 position-fixed top-0" style={{ zIndex: '10' }}>
            <Container>
                <Navbar.Brand ><Link to={'/'} className='fw-bolder' style={{ color: 'white', textDecoration: 'none' }}> <i className="fa-solid fa-cart-plus"></i> FF Store</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {insideHome && <Nav.Link>
                            <input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} type="text" style={{ width: '500px' }} className='rounded p-1' placeholder='search product here!!!' />
                        </Nav.Link>}

                        <Nav.Link ><Link to={'/wishlist'} style={{ color: 'white', textDecoration: 'none' }} className='fw-bolder'> <i className="fa-solid fa-heart text-danger"></i> Wishlist <Badge>{yourWishlist?.length}</Badge></Link></Nav.Link>
                        <Nav.Link ><Link to={'/cart'} style={{ color: 'white', textDecoration: 'none' }} className='fw-bolder'> <i className="fa-solid fa-cart-plus text-success"></i> Cart <Badge>{yourCart?.length}</Badge></Link ></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header