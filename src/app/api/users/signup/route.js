import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect()

export async function POST(request){
    try {
        const reqBody = await request.json();
        const {username,email,password} = reqBody
        console.log("body is ",reqBody);

        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error:"user already exists",success:false})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);
        const newUser = new User({
            username,
            email,
            password:hashedPassword
        });
        const saved = await newUser.save();

        console.log(saved);

        return NextResponse.json({
            message:"User created successfully",
            success:true,
            saved,
        })



    } catch (error) {
        return NextResponse.json({
            error:error.message,
            status:500,
            success:false
        })
    }
}
