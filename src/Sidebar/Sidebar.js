import Category from './Category/Category'
import Colors from './Category/Colors/Colors';
import Price from './Price/Price'

import './sidebar.Module.css';
import { TiShoppingCart } from "react-icons/ti";


 function Sidebar() {
  return <>
  
  <section className='sidebar'>
  <div className='logo-container'>
   <TiShoppingCart className='cart-icon'style={{ fontSize: '28px' }} /> 
  
  </div>

  <Category/>
  <Price/>
  <Colors/>
  </section>
  
  </>
    
  
}



export default Sidebar