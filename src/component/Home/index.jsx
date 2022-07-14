import React from 'react';
import Products from '../Products';
import Photo from "./sale_6.jpg";
import { HomePage, Image, ImageOverlay, Title } from "./style.js";
// import headerImage from "./sale_6.jpg";

const Home = () => {
  return (
    <HomePage>
      <div className="card bg-dark text-white">
        <Image className="card-img" src={Photo} alt="Card image" />

        <ImageOverlay className="card-img-overlay container flex-column justify-content-center ">
          <Title className="card-title display-4 fw-bolder mb-0"> NEW SEASON ARRIVALS </Title>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text lead fs-2"> CHECK OUT ALL THE TRENDS </p>
        </ImageOverlay>
      </div>

      <Products />
    </HomePage>
  )
}

export default Home
