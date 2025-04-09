

import { LOGOUT, SIGNIN, SIGNUP } from "../actionType";


const initialState = {
  users: [],
  currentUser: null,
  isAuth : false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {

    case SIGNUP :
    return { users:[...state.users,action.payload],currentUser:null }

    case SIGNIN :
      return {...state,currentUser:action.payload,isAuth:true}

    case LOGOUT :
      return {...state,currentUser:null, isAuth:false}
    
    default:
      return state;
  }
};

export default AuthReducer;
