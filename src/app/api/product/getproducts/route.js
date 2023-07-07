import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/productModel"
import { NextRequest,NextResponse } from "next/server";
(async()=>{
   await connect()
})()

export async function GET(request){
    console.log("hello");
    try {    
        
       const prod = await Product.find({});
       console.log(prod);

        return NextResponse.json({
            success:true,
            product:prod
        })
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"some error occured",
            error:error.message
        })
    }
}