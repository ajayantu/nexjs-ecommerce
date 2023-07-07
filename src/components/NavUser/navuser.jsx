"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import "./navuser.css"
import axios from 'axios';
import LogoutButton from "@/components/logoutButton";

const NavUser = () => {
    const [isLogin,setIsLogin] = useState(null)
    const [user,setUser] = useState(null)
    useEffect(()=>{
        (async()=>{
            try {
                const res = await axios.get("/api/users/me");
                console.log(res.data);
                if(res.data.success===true){
                    setIsLogin(true)
                    setUser(res.data.data)
                }
                else{
                    setIsLogin(false)
                }
            } catch (error) {
                setIsLogin(false)
            }
            
        })()
    },[])
  return (
    <>
        {
            isLogin!==null && !isLogin?
            <Link href={"/login"}>
                <li>Login</li>
            </Link>
            :
            <>
                <p className='username'>Welcome {user && user.username}</p>
                <LogoutButton />
            </>
        }
        
    </>
  )
}

export default NavUser