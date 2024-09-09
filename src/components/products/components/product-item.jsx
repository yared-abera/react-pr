import React from 'react'
import styles from './product-item.module.css'

function  ButtonComponent() {
  console.log(styles)
  return (
    <button className={styles.buttonStyle} >Click</button>
  )
} 

 
function ProductItem( {singleProductItem} ) {
  return (
     <> 
     <p className={styles.productTitle}> {singleProductItem}</p>
     <ButtonComponent />   
     </>
  );
}

export default ProductItem;
 