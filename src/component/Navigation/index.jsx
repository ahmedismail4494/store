import React from 'react';
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';
import { NavigationPage, Brand } from "./style.js";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket, // a cup of coffee
  faUserPlus, // the user circle icon
  faCartShopping, // the clock icon
} from "@fortawesome/free-solid-svg-icons";


const Navigation = () =>  {

  const countProduct = useSelector( (state) => state.handleCart);

  return (
    <NavigationPage>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink className="navbar-brand " to="/"> <Brand> Store </Brand> </NavLink>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav m-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <NavLink className="nav-link pl-2" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link pl-2" to="/products">
                Products
              </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link pl-2" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button  className="btn btn-outline-dark my-2 mx-1 my-sm-0 " >
              <FontAwesomeIcon  icon={faRightToBracket}  style={{ fontSize: 20, color: "orange", marginRight: 10 }}  /> 
              Login
            </button>
            <button className="btn btn-outline-dark my-2 mx-1 my-sm-0" >
              <FontAwesomeIcon  icon={faUserPlus}  style={{ fontSize: 20, color: "orange", marginRight: 10 }}  />  
              Register
            </button>
            <NavLink to="/cart" className="btn btn-outline-dark my-2 mx-1 my-sm-0" >
              <FontAwesomeIcon  icon={faCartShopping}  style={{ fontSize: 20, color: "orange", marginRight: 10 }}  />             
              Card ( {countProduct.length} )
            </NavLink>
          </form>
        </div>
      </nav>
    </NavigationPage>
  );
}   

export default Navigation




