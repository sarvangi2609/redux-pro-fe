

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddData } from '../Redux/Product/Action';

const Addproduct = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()



    const proObj = {
      id:"",
      title: "",
      description: "",
      category: "",
      image: "",
      price: ""
    }
  
    const [addData,setAddData] = useState(proObj)

    
  const handleChange = (e) => {
    setAddData({ ...addData, [e.target.name]: e.target.value })
}

const handleSubmit = (e) => {
  e.preventDefault();
    dispatch(AddData(addData));
    console.log(addData)
    navigate("/product")
};


const { title,id, description, category, price, image } = addData

  return (

    <form action="" className="addpro" onSubmit={handleSubmit} >

    <h1>Add Product</h1>

  <input type="text" name="id" 
  value={id}  onChange={handleChange} 
  placeholder="Id" />

  <input type="text" name="title" 
  value={title} 
  onChange={handleChange} 
  placeholder="Title" />

  <input type="text" name="image" 
  value={image} onChange={handleChange} 
  placeholder="Image URL" />

  <input type="text" name="description" 
  value={description} onChange={handleChange} 
  placeholder="Description" />

  <input type="text" name="price"
   value={price} onChange={handleChange} 
   placeholder="Price" />

  <input type="text" name="category" 
  value={category} onChange={handleChange} 
  placeholder="Category" />

    <input type="Submit" value="Add Product" className="addbtn"/>


  </form>
    
  )
}

export default Addproduct