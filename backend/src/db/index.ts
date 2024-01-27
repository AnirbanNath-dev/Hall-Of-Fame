import mongoose from "mongoose";

const connectDB = async ()=>{

    try {
        
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log('\nMongodb connected successfully : ' + connectionInstance.connection.host );
        

    } catch {
        console.log('Mongodb connection error' );
        throw new Error
    }

}

export default connectDB;