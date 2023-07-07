import React from 'react'
import styles from "./page.module.css"
import "../../app/globals.css"
import ProductItem from '@/components/proditem/proditem'
const Products = () => {
  
  return (
    <>
      <div className="products_main_container">
        <div className={styles.product_container}>
          <ProductItem styles={styles} />
        </div>
      </div>
    </>
  )
}

export default Products