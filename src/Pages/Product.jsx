import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Product/Action";
import ProductCard from "../Components/ProductCard";
// import { Oval } from "react-loader-spinner";
import SideBar from "../Components/SideBar";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const { isloading, iserror, data } = useSelector((state) => state.product);
  const [sort, setSort] = useState(null); 
  const [search,setsearch] =useState("")

  const [searchParams , setSearchParams] = useSearchParams()


  const dispatch = useDispatch();


  const paramObj = {

    category:searchParams.getAll("category"),
    _sort:  sort ? "price" : undefined, 
    _order: sort,
    q:search

  }



  useEffect(() => {

    const id = setTimeout(()=>{

      dispatch(getData(paramObj));

    },500)
    return (() => {
      clearTimeout(id)
    })

    // dispatch(getData(paramObj));
    
  }, [ sort,search,searchParams]);

  return isloading ? (
    // <Oval
    //   visible={true}
    //   height="80"
    //   width="80"
    //   color="#4fa94d"
    //   ariaLabel="oval-loading"
    //   wrapperStyle={{}}
    //   wrapperClass=""
    // />
    <h1>Loading...</h1>

  ) : iserror ? (
    <h1>Somthing Went Wrong !</h1>
  ) : (
    <>

   

    <div className="main" style={{display:"flex",justifyContent:'space-between',width:"80%",margin:"auto"}}>

     <div className="left" style={{width:"200px",paddingTop:"90px"}}>
     <SideBar />
     </div>


      <div className="right" style={{width:"90%"}}>

        
    <div style={{width:"80%",margin:"auto", marginTop:"20px",display:"flex" , justifyContent:"space-between"}}>


{/* Search */}

<input type="text" style={{height:"40px", width:"60%",padding:"0px 10px"}}  onChange={(e)=>setsearch(e.target.value)} placeholder="Search Here..." />


{/* Sorting */}

<button onClick={() => setSort("asc")} style={{width:"15%",backgroundColor:"black",color:"white",border:"none"}}>LowToHigh</button>
<button onClick={() => setSort("desc")} style={{width:"15%",backgroundColor:"black",color:"white",border:"none"}}>HighToLow</button>

</div>

{/* Product */}
<div
    className="product-container"
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px",
    }}
  >
    {data.length > 0 &&
      data.map((el) => (
        <ProductCard
          key={el.id}
          title={el.title}
          image={el.image}
          id={el.id}
          price={el.price}
        />
      ))}
</div>

      </div>

    </div>




    </>
  );
};

export default Product;
