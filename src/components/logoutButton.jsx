"use client"
import "./logout.css"
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React from 'react'

const logoutButton = () => {
    const router = useRouter()
    const handleLogout = async (e)=>{
        const res = await axios.get("/api/users/logout");
        console.log(res.data);
        if(res.data.success===true)
        {
          setTimeout(()=>{
            window.location.reload()
          },500)
          router.push("/login");
        }
    }
  return (
    <>
        <button onClick={handleLogout}>LOG OUT</button>
    </>
  )
}

export default logoutButton