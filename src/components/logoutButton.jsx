"use client"
import "./logout.css"
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React from 'react'

const logoutButton = (props) => {
    const router = useRouter()
    const handleLogout = async (e)=>{
        const res = await axios.get("/api/users/logout");
        console.log(res.data);
        if(res.data.success===true)
        {
          props.setLogin(false)
          // setTimeout(()=>{
          //   window.location.reload()
          // },500)
          router.push("/login");
        }
    }
  return (
    <>
        <button className="logoutbtn" onClick={handleLogout}>LOG OUT</button>
    </>
  )
}

export default logoutButton