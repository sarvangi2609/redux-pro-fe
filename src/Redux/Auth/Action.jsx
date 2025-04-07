import axios from "axios";
import { LOGOUT, PROERROR, SIGNIN, SIGNUP } from "../actionType";



// SignUp 

export const handleSignUp = (formdata)=>(dispatch)=>{

    console.log(formdata)

    axios.post("https://redux-pro-be.onrender.com/Auth",{...formdata,role:"user"})
    .then((res)=>dispatch({type: SIGNUP,payload:formdata}))
    .catch((err)=>console.log(err))


  }


//   SignIn

export const HandleSignIn =  (formdata)=>(dispatch)=>{
   const { email , password } = formdata
    axios.get("https://redux-pro-be.onrender.com/Auth")
    .then((res)=>{
      const usersArray = res.data
      const currentUser = usersArray.find((el)=>el.email == email && el.password == password)
      dispatch({type: SIGNIN,payload:currentUser})
     
    })
    .catch((err)=>({type:PROERROR,payload:err?.message}))
  }


  export const HandleLogOut = () => (dispatch) => {
    axios
      .post("https://redux-pro-be.onrender.com/Auth") 
      .then((res) => {
        dispatch({ type: LOGOUT });
      })
      .catch((err) => console.log("Logout Error:", err));
  };
  