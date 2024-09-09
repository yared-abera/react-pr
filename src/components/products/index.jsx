import React from 'react'
import ProductItem from './components/product-item'
const dummyProductData = 
[ 'product 1', 
  'product 2', 
  'product 3' ];
    

function ProductList() {
  return (
    <div>
      <h3>ECommerce Project</h3>
        {/* <ProductItem/> */}  
        <ul id="products">
        {dummyProductData.map((item,index) => (

          <li key={index}>{item}</li>
          
        ))} 
        
       </ul>
    </div>
  ) 
}

export default ProductList
