

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteData, editData } from '../Redux/Product/Action'
import { Link, useNavigate } from 'react-router-dom'

const ProductCard = ({id,image,price,title}) => {
  const  { currentUser } = useSelector(state=>state.auth)

  const dispatch = useDispatch()


  return (
    <>
    

    <div style={{border: '1px solid black',
    textAlign: 'center',
    padding: '15px',
    background: 'white',
    width: '300px'}}>

      <Link to={`/description/${id}`}>
      <img src={image} alt="" height={300} width={300} />
      </Link>

      <h5>{title}</h5>

      <h4>{price}</h4>

      <Link to={`/editproduct/${id}`}>

      {currentUser ?.role =="admin" &&<button style={{ margin: '5px',
  padding: '8px 15px',
  border: 'none',
  cursor: 'pointer',
  background: 'black',
  color: 'white',
  fontSize: '14px'}}

 
  >
    EDIT
    </button>}
      
      </Link>


      {currentUser ?.role =="admin" &&<button style={{ margin: '5px',
    padding: '8px 15px',
    border: 'none',
    cursor: 'pointer',
    background: 'black',
    color: 'white',
    fontSize: '14px',}}
    
    onClick={() => dispatch(DeleteData(id))}>
      DELETE
      </button>}
      
    </div>

    </>

  )
}

export default ProductCard