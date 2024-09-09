import React from 'react'
import ProductItem from './components/product-item'
import './style.css'


function ProductList({name,city,listofProducts}) {
  return ( 
    <div>
      console.log(name,city);
      <h3 className="title">ECommerce Project</h3>
        {/* <ProductItem/> */}  
  <h4>
    Name is {name},he/she is belongs to this city {city}
  </h4>
          <ul id="products">
        {listofProducts.map((item,index) => (
          <ProductItem  singleProductItem={item} key={index}/>
           
        ))} 
        
       </ul>   
    </div>
  ) 
}

export default ProductList
