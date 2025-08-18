import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
       
    try{
      const connectioninstance = await mongoose.connect(`${process.env.MongoDb_Url}/${DB_NAME}`)
      console.log(`\n mongodb connected !! db host ${connectioninstance.connection.host}`);
    }
   catch(error){
    console.log("Mongodb connection error",error);
    process.exit(1)
   }
}

export  default connectDB 