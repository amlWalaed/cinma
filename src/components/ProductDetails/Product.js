import axios from "axios";
import { useEffect, useState } from "react";

function Product({id}){
    const [product , setProduct] = useState();
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`).then(res=>{
        let data =res.data;
        console.log(data)
        setProduct(()=>({...data}))
    }).catch(rej=>{
        console.log(rej)
    })
    },[id])
    return(<div>{product}</div>)
}
export default Product;