import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Product from "../components/ProductDetails/Product";
function ProductDetails(){
    const [id , setId] = useState(useParams().id)
    return(<>
        <Navbar/>
        <Product id={id}/>
    </>)
}
export default ProductDetails;