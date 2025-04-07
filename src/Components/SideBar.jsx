


import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SideBar = () => {

  const [searchParams , setSearchParams] = useSearchParams()

  const [catVal , setcatVal] = useState(searchParams.getAll("category") || [])
  console.log()

  const handleChange =(e)=>{

    const {value} = e.target;
    let newarray = [...catVal];

    if(catVal.includes(value)){
     newarray = catVal.filter((el)=> el != value)
    }else{
      newarray.push(value)
    }
    setcatVal(newarray)
  }

  useEffect(()=>{
      setSearchParams({category:catVal})
  },[catVal])



  return (
    <>

    <div>

        <input type="checkbox" name="men's clothing" value={"men's clothing"} onChange={handleChange} checked={catVal.includes("men's clothing")} /> Mens<br /><br />
        <input type="checkbox" name="women's clothing" value={"women's clothing"} onChange={handleChange} checked={catVal.includes("women's clothing")} /> Womens<br /><br />
        <input type="checkbox" name="electronics" value={"electronics"} onChange={handleChange} checked={catVal.includes("electronics")} /> Electronics<br /><br />
        <input type="checkbox" name="jewelery" value={"jewelery"} onChange={handleChange} checked={catVal.includes("jewelery")} /> Jewelery<br /><br />

    </div>


    </>
  )
}

export default SideBar