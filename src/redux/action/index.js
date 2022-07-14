
// For Add Item to Cart
export const addCart = (product) => {
  return{
    type: "ADDCART",
    payload: product
  }
}


// For Delete Item From Cart
export const deletCart = (product) => {
  return{
    type: "DELETITEM",
    payload: product
  }
}