"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
const ProductItem = ({ styles }) => {
  const [products, setProducts] = useState([]);
  const router = useRouter()
  const handleProductDetail = (id)=>{
    router.push(`/products/${id}`)
  }
  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/product/getproducts");
      console.log(res.data);
      setProducts(res.data.product);
    })();
  }, []);
  return (
    <>
      {products.map((prod, index) => {
        return (
          <div className={styles.prod_item} key={index} onClick={()=>handleProductDetail(prod._id)}>
            <div className={styles.card}>
              <img className={styles.imgtag} src={prod.imageUrl} alt="" />
              <p className={styles.name}>{prod.name}</p>
              <div className={styles.bottom}>
                {/* <div className={styles.addtocart}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ msFilter: "" }}
                    fill="rgba(255, 255, 255, 1)"
                    >
                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                    <circle cx="17.5" cy="19.5" r="1.5"></circle>
                    <path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path>
                    <path d="M10 17h8a1 1 0 00.93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 004.33 3H2v2h2.33l4.75 11.38A1 1 0 0010 17z"></path>
                    </svg>
                    <button className={styles.cartbtn}>ADD TO CART</button>
                </div> */}
                <p className={styles.price}>₹{prod.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductItem;
