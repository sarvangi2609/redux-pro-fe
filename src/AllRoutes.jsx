

import React from 'react'
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import AddProduct from "./Pages/Addproduct"
import Signin from "./Pages/Signin"
import SignUp from "./Pages/SignUp"
import { Route, Routes } from 'react-router-dom'


const AllRoutes = () => {
  return (

    <>

        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/product" element={<Product />} />
              
              

            <Route path="/editproduct/:id" element={<EditProduct />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/description/:id" element={<Description />} />
        </Routes>
    
    </>
    
  )
}

export default AllRoutes