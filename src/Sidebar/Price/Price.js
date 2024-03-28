import "./Price.css";

 function Price() {
  return (
    <div className="ml">
    <h2 className="sidebar-title-price-title">Price</h2>

    <label className='sidebar-label-container'>
    <input type='radio' name='test2'/>
    <span className='checkmark'></span>All
    </label>

    <label className='sidebar-label-container'>
    <input type='radio' name='test2'/>
    <span className='checkmark'></span>₹0-₹500
    </label>

    <label className='sidebar-label-container'>
    <input type='radio' name='test2'/>
    <span className='checkmark'></span>₹500-₹1000
    </label>

    <label className='sidebar-label-container'>
    <input type='radio' name='test2'/>
    <span className='checkmark'></span>₹1000-₹1500
    </label>


    <label className='sidebar-label-container'>
    <input type='radio' name='test2'/>
    <span className='checkmark'></span>₹2000-Over
    </label>

    </div>



  )
}


export default Price;