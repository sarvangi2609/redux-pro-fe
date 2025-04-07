

 
import { PROERROR, PROREQ, PROSUCCESS } from "../actionType";


const initialstate = {

  isloading : false,
  iserror : false,
  data : []

}

const ProductReducer = (state=initialstate,action) => {

  switch (action.type) {
    case PROREQ:
    return {
        isloading : true,
        iserror : false,
        data : []
    };

    case PROSUCCESS:
       return {

        isloading : false,
        iserror : false,
        data : action.payload

        };

    case PROERROR:
    return  {

        isloading : false,
        iserror : true,
        data : []

        };
        

    default:
        return state;
}


}
 

export default ProductReducer




   