import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest,NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
connect()

export async function GET(request){
    try {   
        const userid = await getDataFromToken(request)
        const data = await User.findOne({_id:userid}).select("-password")
        return NextResponse.json({
            data,
            success:true,
        })
    } catch (error) {
        return NextResponse.json({
            message:error.message,
            success:false,
        })
    }

}