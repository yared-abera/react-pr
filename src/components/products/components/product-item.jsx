import React from 'react'
import styles from './product-item.module.css'

function  ButtonComponent() {
  console.log(styles)
  return (
    <button className={styles.buttonStyle} >Click</button>
  )
} 

 
function ProductItem( {singleProductItem ,key} ) {
  return (
     <div style={{border:"1px solid black", padding:"10px",margin:"10px"}} key={key}>  
     <p className={styles.productTitle}> {singleProductItem}</p>
     <ButtonComponent />   
     </div>
  );
}

export default ProductItem;
 