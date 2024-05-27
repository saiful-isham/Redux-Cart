import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItems } from '../redux/slices/cartSlice'
import { Link, useNavigate } from 'react-router-dom'


function Cart() {
  const ourCart = useSelector(state=>state.cartReducer)

  const [cartTotal, setCartTotal] = useState(0)
  const navigate = useNavigate()

  const yourCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(ourCart?.length>0){
      setCartTotal(ourCart?.map(item=>item.totalPrice).reduce((t1,t2)=>t1+t2))
    }else{
      setCartTotal(0)
    }

  },[ourCart])



  const checkout = () => {
    dispatch(emptyCart())

    alert('order Placed Seccessfully')
    navigate('/')

  }



  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      dispatch(decQuantity(product.id))




    } else {
      dispatch(removeCartItems(product.id))
    }

  }





  return (
    <>
      <Header />
      <div style={{ marginTop: '150px' }} className="container">
        {

          yourCart?.length > 0 ?

            <div className="cart">
              <h1>Cart Summary</h1>
              <div className="row mt-4">
                <div className="col-lg-8">
                  <table className="table shadow">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>...</th>
                      </tr>
                    </thead>
                    <tbody>

                      {
                        yourCart?.map(product => (
                          <tr>
                            <td>{product?.id}</td>
                            <td>{product?.title.slice(0, 20)}</td>
                            <td> <img width={'50px'} src={product?.thumbnail} alt="" /></td>
                            <td>
                              <div className="d-flex">
                                <button onClick={() => handleDecrement(product)} className='btn fw-bolder'>-</button>
                                <input value={product?.quantity} style={{ width: '50px' }} className='fw-bolder me-1 ms-1' type="text" />
                                <button onClick={() => dispatch(incQuantity(product?.id))} className='btn fw-bolder'>+</button>
                              </div>
                            </td>
                            <td>$ {product?.totalPrice}</td>
                            <td>
                              <button onClick={() => dispatch(removeCartItems(product?.id))} className='btn'> <i className="fa-solid fa-trash text-danger"></i> </button>
                            </td>
                            <td></td>
                          </tr>
                        ))
                      }


                    </tbody>
                  </table>
                  <div className="float-end">
                    <button onClick={() => dispatch(emptyCart())} className='btn btn-danger me-2'>EMPTY CART</button>
                    <Link to={'/'} className='btn btn-primary '> SHOP MORE</Link>

                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="border rounded shadow p-3">
                    <h4>Total Amount : <span>$ {cartTotal}</span></h4>
                    <hr />
                    <div className="d-grid">
                      <button onClick={checkout} className='btn btn-success'>CheckOut </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            :

            <div style={{ height: '60vh' }} className="d-flex justify-content-center align-items-center flex-column">
              <img height={'400px'} width={'400px'} src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png" alt="" />
              <h3 className='text-danger'>your Cart is empty</h3>
            </div>








        }
      </div>
    </>
  )
}

export default Cart