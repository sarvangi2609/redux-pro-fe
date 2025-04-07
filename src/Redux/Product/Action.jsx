import axios from "axios"
import { PROERROR, PROREQ, PROSUCCESS } from "../actionType"
import { toast } from "react-toastify"



export const getData  =(paramObj)=> (dispatch)=>{

    dispatch({type:PROREQ})
    axios.get("https://redux-pro-be.onrender.com/Product",{
      params:paramObj
    })
    // console.log(params)
    .then((res)=>{console.log(res)
      dispatch({type:PROSUCCESS , payload : res.data})
      // toast.success("Data Get Successfully")
      }
    )
    .catch((err)=>{
      console.log(err)
      toast.error(err?.message)
      dispatch({type:PROERROR,payload:err?.message})
    })
  }

export const DeleteData =(id)=>(dispatch)=>{

  axios.delete(`https://redux-pro-be.onrender.com/Product/${id}`)
  .then((res)=>{
    console.log(res)
    getData(dispatch)
  })
  .catch((err)=>console.log(err))

}


// Edit Data

export const editData  =(id,editPro)=>(dispatch)=> {

  axios.put(`https://redux-pro-be.onrender.com/Product/${id}`,editPro)
  .then((res)=>{
      alert("Product Update Successfully")
      getData(dispatch)
  })
  .catch((err)=>console.log(err))


}


// Add data

export const AddData  =(addData)=>(dispatch)=> {

  axios.post("https://redux-pro-be.onrender.com/Product",addData)
  .then((res)=>{
      alert("Product Added Successfully")
      getData(dispatch)
  })
  .catch((err)=>console.log(err))


}
