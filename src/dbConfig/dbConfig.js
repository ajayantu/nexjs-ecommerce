import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("connected to database");
        })
    } catch (error) {
        console.log("Something went wrong",error);
    }
}
