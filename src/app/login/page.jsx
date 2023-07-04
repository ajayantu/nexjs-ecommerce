"use client";

import React, { useState } from 'react'
import styles from "./page.module.css"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';

const Login = () => {
  const router = useRouter()
  const [user,setUser] = useState({
    email:"",
    password:""
  });

  const onLogin = async (e)=>{
    console.log(user);
    try {
      const res = await axios.post("/api/users/login",user);
      console.log(res.data);
      if(res.data.success===true){
        router.push("/")
      }
      else{
        toast.error(res.data.message);
      }  
    } catch (error) {
      toast.error(error.message);
    }

  }
  return (
    <div className={styles.login_main_container}>
        <Toaster />
        <div className={styles.login_container}>
            <h1>Login</h1>
            <input className={styles.input_field} type="email" placeholder='Enter email' value={user.email} onChange={(e)=>{
              setUser({...user,email:e.target.value})
            }} />
            <input className={styles.input_field} type="password" placeholder='Enter password' value={user.password} onChange={(e)=>{
              setUser({...user,password:e.target.value})
            }} />
            <button className={styles.btn} onClick={onLogin}>Login</button>
            <span>Not have an account? <Link href={"/signup"}>Signup</Link></span>
        </div>
    </div>
  )
}

export default Login