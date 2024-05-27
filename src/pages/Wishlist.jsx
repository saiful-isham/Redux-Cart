import React from 'react'
import Header from '../components/Header'
import { Col, Row, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {removeWishlistItems} from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {

  const ourWishlist = useSelector(state => state.wishlistReducer)
  const ourCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()

  const handleCart = (product)=>{
    const existingProduct = ourCart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      dispatch(removeWishlistItems(product.id))
      alert('the product has add to your Cart')



    }else{

    }
    dispatch(addToCart(product))
    dispatch(removeWishlistItems(product.id))


    

  }



  return (
    <div> 
      <Header />

      <div style={{ marginTop: '150px' }} className="container-fluid">

        { 
          ourWishlist?.length>0?
          
          <div >

          <h3>Your Wishlist</h3>
          <Row>
            { 

            ourWishlist?.map(product=>(
              <Col key={product?.id} className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
              <Card className='shadow rounded' style={{ width: '18rem' }}>
                <Card.Img height={'180px'} variant="top" src={product.thumbnail} />
                <Card.Body>
                  <Card.Title>{product.title.slice(0,20)}...</Card.Title>
                  <div className="d-flex justify-content-around mt-3">
                    <button onClick={()=>dispatch(removeWishlistItems(product.id))} className='btn'> <i className="fa-solid fa-heart-circle-xmark text-danger"></i> </button>
                    <button onClick={()=>handleCart(product)} className='btn'> <i className="fa-solid fa-cart-plus text-success"></i> </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            ))
            
            
            }
          </Row>
        </div>

        :
        <div style={{height:'60vh'}} className="d-flex justify-content-center align-items-center flex-column">
          <img height={'400px'} width={'400px'} src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png" alt="" />
          <h3 className='text-danger'>your Wishlist is empty</h3>
        </div>
        
      
      }


      </div>
    </div >
  )
}

export default Wishlist