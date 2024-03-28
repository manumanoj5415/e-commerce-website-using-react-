import {FiHeart} from "react-icons/fi"
import{AiOutlineShoppingCart,AiOutlineUserAdd} from "react-icons/ai";
import "./Nav.css";


 function Nav() {
  return <nav>
  <div className="nav-conatiner">
  <input type="text" className="search-input"
   placeholder="Enter your search shoes."/>
   </div>

   <div className = "profile-conatiner">
   <a href="#">
  <FiHeart className="nav-icons"/>
   </a> 

   <a href="#">
   <AiOutlineShoppingCart className="nav-icons"/>
   </a>
   <a href="#">
   <AiOutlineUserAdd className="nav-icons"/>
   </a>
     </div>
  </nav>
    
  
}
export default Nav;