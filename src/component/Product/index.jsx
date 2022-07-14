import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import {addCart} from '../../redux/action/index';
import { useParams, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar, // the clock icon
} from "@fortawesome/free-solid-svg-icons";

import { ProductPage, Image } from "./style.js";


const Product = () => {

  const dispatch = useDispatch();
  
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    }
    getProduct();
  }, []);

  const Loading = () => {
    return(
      <>
      <div className='loading col-md-6 m-auto'>
        Loading..... 
      </div>
      </>
    )
  }

  const ShowProduct = () => {
    return(
      <>
        <div className='col-md-6 m-auto'>
          <Image  src={product.image} alt={product.title} height="400px" />
        </div>
        <div className='col-md-6 m-auto'>
          <h2 className="text-uppercase "> {product.category} </h2>
          <h1 className="display-5 text-black-50"> {product.title} </h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}
            <FontAwesomeIcon  icon={faStar}  style={{ fontSize: 20, color: "orange", marginRight: 10 }}  /> 
          </p>
          <h3 className="display-6 fw-bold my-4">
            $ {product.price}
          </h3>
          <p className=""> {product.description} </p>
          <button className="btn btn-outline-dark px-4 py-2"  onClick={() => dispatch(addCart(product))}> 
            Add to Cart 
          </button>
          <NavLink to='/cart' className='btn btn-dark px-4 py-2 ml-3'>
            Go To Cart
          </NavLink>
        </div>
      </>
    )
  }

  return (
    <ProductPage>
      <div className='container'>
        <div className='row m-auto'>
          {loading? <Loading /> : <ShowProduct /> }
        </div>
      </div>
    </ProductPage>
  )
}

export default Product
