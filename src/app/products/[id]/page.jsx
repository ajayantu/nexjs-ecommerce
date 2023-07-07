import React from 'react'
import styles from "./page.module.css"
const ProductDetails = ({params}) => {
  return (
    <>
        <div className={styles.prod_details_main_container}>
          <div className={styles.prod_details_container}>
            <div>ProductDetails of {params.id}</div>
          </div>
        </div>
        
    </>
  )
}

export default ProductDetails