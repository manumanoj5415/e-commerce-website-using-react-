import './Category.css';

 function Category(handleChange) {
  return (
    <div>
    <h2 className='sidebar-title'>Category</h2>
    <div>
     <label className='sidebar-label-container'>
     <input  onChange = {handleChange} type='radio' value="" name='test'/>
     <span className='checkmark'></span>All
     </label>

   <input
   handleChange={handleChange}
   value="sneaker"
   title="Sneaker"
   name="test" />
    
   <input
   handleChange={handleChange}
   value="falts"
   title="falts"
   name="test" />

   <input
   handleChange={handleChange}
   value="sandals"
   title="Sandals"
   name="test" />


   <input
   handleChange={handleChange}
   value="heels"
   title="heels"
   name="test" />


     </div>
     </div>
  )
}


export default Category