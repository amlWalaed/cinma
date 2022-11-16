import { NavLink } from "react-router-dom"
const Navbar = ()=>{
    return(
        <nav>
            <ul>
                <li><NavLink exact="true" to="/">home</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;