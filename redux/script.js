//! --------------------- ACTION TYPES -----------------------
const CAKE_ORDERED = "CAKE_ORDERED";


//! ------------------------ ACTION --------------------------
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}


//! ----------------------- REDUCER -------------------------
const inicialState = {
  numofCakes: 10,
  numOfIcecream: 40,
};

const reducer = (state = inicialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numofCakes: action.numofCakes - 1,
      };
    default:
      return state;
  }
};


//! ------------------------ STORE --------------------------


import redux from 'redux'

console.log("oii")