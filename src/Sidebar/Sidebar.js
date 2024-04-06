import Category from './Category/Category'
import Colors from './Category/Colors/Colors';
import Price from './Price/Price'

import './sidebar.Module.css';
import { TiShoppingCart } from "react-icons/ti";


 function Sidebar({handleChange }) {

  return <>
  
  <section className='sidebar'>
  <div className='logo-container'>
   <TiShoppingCart className='cart-icon'style={{ fontSize: '28px' }} /> 
  
  </div>

  <Category handleChange ={handleChange}/>
  <Price handleChange ={handleChange}/>
  <Colors handleChange ={handleChange}/>
  </section>
  
  </>
    
  
}



export default Sidebar