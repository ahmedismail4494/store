
const addItem = [];

const handleCart = (state=addItem , action) => {
  switch(action.type){

    case "ADDCART": return [...state, action.payload ];
      
    case "DELETITEM": return state = state.filter((p) => {return p.id !== action.payload.id})
      
    default: return state; 
      
      
  }
}


export default handleCart;






