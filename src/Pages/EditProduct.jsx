import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editData } from "../Redux/Product/Action";
import { useDispatch } from "react-redux";

const EditProduct = () => {

  const {id } = useParams()
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

  const [editPro,seteditPro] = useState(proObj)



  const handleChange = (e) => {
    seteditPro({ ...editPro, [e.target.name]: e.target.value })
}



const EditProduct=()=>{

  axios.get(`http://localhost:3000/Product/${id}`)

    .then((res) => {
      seteditPro(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

}

useEffect(()=>{
  EditProduct()
},[id])


const handleSubmit = (e) => {
  e.preventDefault();
  if (id) {
    dispatch(editData(id, editPro));
    navigate("/product")
  }
};


  return (

    <>

      <form action="" className="addpro" onSubmit={handleSubmit} >

        <h1>Edit Product</h1>

      <input type="text" name="id" value={editPro.id} onChange={handleChange} placeholder="Id" />

      <input type="text" name="title" value={editPro.title} onChange={handleChange} placeholder="Title" />

      <input type="text" name="image" value={editPro.image} onChange={handleChange} placeholder="Image URL" />

      <input type="text" name="description" value={editPro.description} onChange={handleChange} placeholder="Description" />

      <input type="text" name="price" value={editPro.price} onChange={handleChange} placeholder="Price" />

      <input type="text" name="category" value={editPro.category} onChange={handleChange} placeholder="Category" />

        <input type="Submit" value="Save Changes" className="addbtn"/>


      </form>
    </>

  );
};

export default EditProduct;




