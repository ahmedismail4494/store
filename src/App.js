
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Footer from './component/Footer';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import Contact from './component/Contact';
import Navbar from "./component/Navigation";
import Cart from "./component/Cart";



function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />

        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/store/" element={<Home />} />
          <Route exact  path="/products" element={<Products />} />
          <Route exact  path="/products/:id" element={<Product />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
