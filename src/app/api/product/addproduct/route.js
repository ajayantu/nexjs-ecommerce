import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/productModel"
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import { verifyToken } from "@/helpers/verifyToken";
connect()

export async function POST(request){
    try {    
        const {name,description,price,category,prod_type,color,imageUrl} = await request.json();
        const token = request.cookies.get("token")
        const userid = await verifyToken(request);
        
        const user = await User.findOne({_id:userid});
        if(!user.isSeller){
            return NextResponse.json({
                success:false,
                message:"Not a seller"
            })
        }
        const prod = new Product({
            name,
            description,
            price,
            category,
            prod_type,
            color,
            imageUrl
        })
        const saved = await prod.save();

        return NextResponse.json({
            success:true,
            product:saved
        })
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"some error occured"
        })
    }
}