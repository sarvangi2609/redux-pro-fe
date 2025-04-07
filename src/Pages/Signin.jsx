
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HandleSignIn } from '../Redux/Auth/Action';

const initialState = {
  email:"",
  password :""
}

const Signin = () => {

   const [formdata,setformdata] = useState(initialState)

   const dispatch = useDispatch()
   const  { currentUser } = useSelector(state=>state.auth)
  //  console.log(currentUser)

   const {email,password} = formdata;


   const handleChange = (e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }
   
  const handleSubmit = (e)=>{
    e.preventDefault();
   dispatch(HandleSignIn(formdata))
   alert("Your are SignIn")
   setformdata(initialState);
  }


  return (

    <>

    <form action="" onSubmit={handleSubmit} className='signinform' >
            <h1>SignIn Here...</h1>
            <input type="email"  value={email}  name="email" onChange={handleChange} placeholder='Enter Email'/><br /><br />
            <input type="password" value={password} name="password" onChange={handleChange}   placeholder='Enter Password' /><br /><br />
            <input type="Submit"  name=""  /><br /><br />

        </form>
    </>

  )
}

export default Signin







