import React, { useEffect, useState } from 'react'
import ProductItem from './components/product-item'
import './style.css'


function ProductList({name,city,listofProducts}) {

  const  intialState =false;
  
  const [flag,setFlag ]=useState(intialState);
  const [count,setCount] = useState(0);
  const [changeStyle,setchangeStyle] = useState(false);

  function handleToggleText() {
    setFlag(!flag);
  }

 function handleIncreaseCount(){
   setCount(count+1);
  }
  
  useEffect(() => {
    if(count===10) {
     setchangeStyle(true); 
    }
  
  },[count]);


  useEffect(() => {
    
    setFlag(!flag);

    console.log(" useEffect"); 
  
  },[]);


  
  


   
  return ( 
    <div>
     <h3 className="title">ECommerce Project</h3>
      <button onClick={handleToggleText}>Toggle Text</button>
        {/* <ProductItem/> */} 
    { 

  flag ? (  
  <h4>
    Name is {name},he/she is belongs to this city {city};
  </h4>)
  :
   (<h4>hello world</h4>)
  
  }  

   <div>
    <button style={{backgroundColor: changeStyle ? "black": "white" ,color: changeStyle ? "white" : "black" }} onClick={handleIncreaseCount}>Increase count </button>
    <p>Count is {count}</p>
   </div>
     <ul id="products">
      { 
      listofProducts.map((item,index) => (
          < ProductItem 
          singleProductItem={item} 
          key={index}
          />
          
        ))} 
       </ul>   
    </div>
  ) 
}

export default ProductList
