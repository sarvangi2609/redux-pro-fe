

import React, { useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { handleSignUp } from '../Redux/Auth/Action'


const initialState = {
  name:"",
  email:"",
  password :""
}

const SignUp = () => {

  const [formdata,setformdata] = useState(initialState)
  const {name,email,password} = formdata;
  const  datafromstore = useSelector(state=>state.auth)
  console.log(datafromstore)
  const dispatch = useDispatch()

  const handleChange = (e)=>{
      setformdata({...formdata,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    dispatch(handleSignUp(formdata))
    alert("Your was Profile Created")
    setformdata(initialState);
 
  }

  return (

    <>

        <form action="" className='signupform' onSubmit={handleSubmit} >
            <h1>SignUp Here...</h1>
            <input  type="text" value={name} name="name" onChange={handleChange} placeholder='Enter Name'/><br /><br />
            <input type="email" value={email} name="email" onChange={handleChange} placeholder='Enter Email'/><br /><br />
            
            <input type="password" value={password} name="password" onChange={handleChange}  placeholder='Enter Password' /><br /><br />
            <input type="Submit" name="" id="" /><br /><br />

        </form>
    
    </>
   
    
  )
}

export default SignUp



