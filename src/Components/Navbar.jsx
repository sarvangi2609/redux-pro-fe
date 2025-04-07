

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HandleLogOut } from '../Redux/Auth/Action'

const Navbar = () => {

  const  { currentUser } = useSelector(state=>state.auth)
  const dispatch = useDispatch()
  return (

    

    <>

        <div className="nav">
          <ul>


          <li>{ currentUser?.role =="admin" && <Link to={"/addproduct"} style={{color:"whitesmoke"}} >AddProduct</Link>}</li>

            <li><Link to={"/"}  style={{color:"whitesmoke"}}>Home</Link></li>
            <li><Link to={"/product"} style={{color:"whitesmoke"}} >Product</Link></li>
            <li><Link to={"/signin"} style={{color:"whitesmoke"}}>SignIn</Link></li>
            <li><Link to={"/signup"} style={{color:"whitesmoke"}}>SignUp</Link></li>

            <button style={{height:"30px", marginRight:"20px"}} className='addbtn' onClick={() => dispatch(HandleLogOut())}>SignOut</button>


           
          </ul>
        </div>
    
    </>

  )
}

export default Navbar