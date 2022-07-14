import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";

import { ProductSection, Card } from "./style.js";

const Products = () => {
  const [products, setProducts] = useState([]); 
  const [filter, setFilter] = useState(products); 
  const [loading, setLoading] = useState(false); 
  // const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(jsonData => { setProducts(jsonData); setFilter(jsonData); setLoading(true);  })
    .catch(err => console.error(err))
  }, []);


  const filterProduct = (cat) => {
    const updatedList = products.filter((product) =>  product.category === cat );
    setFilter(updatedList);
  }


  const Loading = () => {
    return(
      <>
        <div className="loading"> Loading..... </div>
      </>
    )};
 
  const ShowProducts = () => {
    return(
      <>
        <div className='buttonss text-center my-4'>
          <button className='btn btn-outline-dark my-2' onClick={() => setFilter(products)}>
             All 
          </button>
          <button className='btn btn-outline-dark my-2 ml-2' onClick={() => filterProduct("men's clothing")}> 
            Men's Clothing 
          </button>
          <button className='btn btn-outline-dark my-2 my-4 ml-2' onClick={() => filterProduct("women's clothing")}> 
            Women's Clothing 
          </button>
          <button className='btn btn-outline-dark my-2 ml-2' onClick={() => filterProduct("jewelery")}> 
            Jewelery  
          </button>
          <button className='btn btn-outline-dark my-2  ml-2' onClick={() => filterProduct("electronics")}> 
            Electronics  
          </button>
        </div>
          <br /> <br /> <br />
        <ProductSection>
          { React.Children.toArray(
            filter.map((product) => {
                return(
                  <div className='m-4'>
                    <Card className=" h-100 text-center " >
                      <img className="card-img-top p-3" src={product.image} alt="Card image cap" height="250px" />
                      <div className="card-body">
                        <h5 className="card-title">{product.title.substring(0,12)}...</h5>
                        <p className="card-text h4 "> $ {product.price} </p>
                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                      </div>
                    </Card>
                  </div>
                )
              })
            )
          }
        </ProductSection>
      </>
    )};


  return (
    <div>
      <div className='container my-5 py-5'>

        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center'> Latest Products </h1>
            <hr />
          </div>
        </div>

        <div className='row justify-content-center'>
          {loading? <ShowProducts/> : <Loading/>}
        </div>

        <br />  
        

      </div>
    </div>
  )
}

export default Products
