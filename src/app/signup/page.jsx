"use client";

import React,{ useEffect, useState } from 'react'
import styles from "./page.module.css"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';


const Signup = () => {
  const router = useRouter();
  const [user,setUser] = useState({
    username:"",
    email:"",
    password:""
  });
  const [buttonDisabled,setButtonDisabled] = useState(true)
  
  const onSignup = async (e)=>{
    e.preventDefault();
    console.log(user);
    try {
      const res = await axios.post("/api/users/signup",user);
      const data = res.data;
      console.log(data);
      if(data.success===true){
        router.push("/login");
      }
      else{
        toast.error(data.error)
      }
    } catch (error) {
      console.log("Signup failed..",error.message);
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(user.username.length>0 && user.password.length>0 && user.email.length>0){
      setButtonDisabled(false)
    }
    else{
      setButtonDisabled(true)
    }
  },[user])
  return (
    <div className={styles.login_main_container}>
      <Toaster />
        <div className={styles.login_container}>
            <h1>Signup</h1>
            <input className={styles.input_field} type="text" placeholder='Enter Username' value={user.username} onChange={(e)=>{
              setUser({...user,username:e.target.value})
            }} />
            <input className={styles.input_field} type="email" placeholder='Enter email' value={user.email} onChange={(e)=>{
              setUser({...user,email:e.target.value})
            }} />
            <input className={styles.input_field} type="password" placeholder='Enter password' value={user.password} onChange={(e)=>{
              setUser({...user,password:e.target.value})
            }} />
            <button disabled={buttonDisabled} className={styles.btn} onClick={onSignup}>Signup</button>
            <span>Already have an account? <Link href={"/login"}>Login</Link></span>
        </div>
    </div>
  )
}

export default Signup