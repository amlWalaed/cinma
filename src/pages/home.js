import { Component } from "react";
import Navbar from './../components/navbar/navbar.js';
import Products from './../components/home/Products.js';
class Home extends Component{
    render(){
        return(
            <>
            <Navbar />
            <Products/>
            </>
        )
    }
}
export default Home;