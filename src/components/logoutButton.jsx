"use client"

import axios from 'axios'
import { useRouter } from 'next/navigation';
import React from 'react'

const logoutButton = () => {
    const router = useRouter()
    const handleLogout = async (e)=>{
        const res = await axios.get("/api/users/logout");
        router.push("/login");
    }
  return (
    <>
        <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default logoutButton