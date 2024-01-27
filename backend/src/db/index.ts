import mongoose from "mongoose";
import { DATA } from "../constants.js";

const connectDB = async ()=>{

    try {
        console.log(DATA.mongodbUri)
        const connectionInstance = await mongoose.connect(`${DATA.mongodbUri}/${DATA.dbName}`)
        console.log('\nMongodb connected successfully : ' + connectionInstance.connection.host );
        

    } catch {
        console.log('Mongodb connection error' );
        throw new Error
    }

}

export default connectDB;