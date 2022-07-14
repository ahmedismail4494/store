
const addItem = [];

const handleCart = (state=addItem , action) => {
  switch(action.type){

    case "ADDCART": return [...state, action.payload ];
      break;
    case "DELETITEM": return state = state.filter((p) => {return p.id !== action.payload.id})
      break;
    default: return state; 
      break;
      
  }
}


export default handleCart;






