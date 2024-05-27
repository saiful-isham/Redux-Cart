import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function View() {
    const [product,setProduct] = useState({})
    const {id} = useParams()

    const userWishlist = useSelector(state=>state.wishlistReducer)
    const yourCart = useSelector(state=>state.cartReducer)
    const dispatch = useDispatch()
    console.log(userWishlist);
    useEffect(()=>{
        if(localStorage.getItem("allProducts")){
            const allProducts = JSON.parse(localStorage.getItem("allProducts"))
            setProduct(allProducts.find(item=>item.id==id))
        }

    },[])



    const handleCart = ()=>{


        const existingProduct = yourCart?.find(item=>item.id==product.id)
       

        if(existingProduct){
            dispatch(addToCart(product))

            alert('the product has add to your Cart')

        }else{
            dispatch(addToCart(product))



        }



    }







    const handleWishlist = ()=>{
        if(userWishlist?.includes(product)){
            alert("this item is already in your wishlist")

        }else{
            dispatch(addToWishlist(product))
            

        }
    }

    return (

        <div>
            <Header />
           <div style={{ marginTop: '150px' }} className="container d-flex align-items-center">

            <div className="row align-items-center mb-5">
               
                <div className="col-lg-4">
                    <img width={'300px'} height={'400vh'} src={product?.thumbnail} />
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                    <h5>{product?.id}</h5>
                    <h1>{product?.title}</h1>
                    <h3 className='fw-bolder text-danger'>$ {product?.price}</h3>
                    <p className='justify'><span className='fw-bolder'>Description : </span>
                    {product?.description}</p>
                    <div className="d-flex justify-content-between mt-3">
                       
                    <button onClick={handleWishlist}className='btn btn-outline-dark'> <i className="fa-solid fa-heart text-danger"></i> Add Wishlist</button>
                    <button onClick={handleCart}  className='btn btn-outline-dark'> <i className="fa-solid fa-cart-plus text-success"></i> Add To Cart</button>
                    </div>
                </div>
            </div>
                
    
              
              
           </div>
        </div>
    )
}

export default View