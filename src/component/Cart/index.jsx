import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addCart, deletCart} from "../../redux/action/index";

import { CartProduct, NoProduct } from "./style.js";


const Cart = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.handleCart);


  const Products = (product) => {
    return(
      <>
        <div className='row m-auto py-4 bg-light'>
          <div className='col-md-6 m-auto'>
            <img  src={product.image} alt={product.title} height='400px' width='100%' />
          </div>

          <div className='col-md-6 m-auto'>
            <h1 className="display-5 text-black-50"> {product.title} </h1>
            <h3 className="display-6 fw-bold my-4">  $ {product.price}  </h3>

            <button className="btn btn-outline-dark px-4 py-2 " onClick={() => dispatch(deletCart(product))} >  -  </button>
            <button to='/cart' className='btn btn-dark px-4 py-2 ml-3' onClick={() => dispatch(addCart(product))}>  +  </button>
          </div>
        </div>
        <br /> <br />
      </>
    )
  }

  const noProduct = () => {
    return(
      <>
        <NoProduct>
          No Product Added
        </NoProduct>
      </>
    )
  }

  return (
    <CartProduct>
      <div className='container '>
        
          { data.length === 0? noProduct() : data.map(Products) }

      </div>
    </CartProduct>
  )
}

export default Cart
