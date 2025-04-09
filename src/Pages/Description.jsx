
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Description = () => {

  const [oneData,setoneData] = useState({})
  const {id} = useParams()



  const getProduct=()=>{

    axios.get(`https://redux-pro-be.onrender.com/Product/${id}`)

      .then((res) => {
        setoneData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  useEffect(()=>{
    getProduct()
  },[])

  return (

    <>
        <div className="description">
        <h1 className='text-center'>Description here...</h1>
        <div className="container des-container  mt-5">

            <img src={oneData.image} alt="" height={300} width={300}/>
            <div className="des-text" style={{width:"50%"}}>
            <h3>{oneData.title}</h3>
            <h3>Rs.{oneData.price}</h3>
            <h5>{oneData.category}</h5>
            <p>{oneData.description}</p>
            <button className='cart-btn'>Add Cart</button>
            </div>
 
        </div>
        </div>
    
    </>

  )
}

export default Description