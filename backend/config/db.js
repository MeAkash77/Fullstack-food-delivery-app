import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://Akash77:akash007@cluster0.ve8ibdc.mongodb.net/Cluster0').then(()=>{
       console.log('DB connected') ;
    })
}