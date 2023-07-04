import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
connect()

export async function POST(request){
    try {    
        const {email,password} = await request.json()
        
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({
                message:"no user found",
                success:false
            })
        }

        const isValid = await bcryptjs.compare(password,user.password)

        if(!isValid){
            return NextResponse.json({
                message:"invalid password",
                success:false
            })
        }

        //send token
        const tokenData = {
            id:user._id,
            username:user.username,
            email:user.email
        }
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:"1d"})
        const response = NextResponse.json({
            message:"login successfull",
            success:true,         
        })
        response.cookies.set("token",token,{
            httpOnly:true
        })

        return response;
        
    } catch (error) {
        return NextResponse.json({
            error:error.message,
            success:false
        })
    }
}