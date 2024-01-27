import mongoose from "mongoose";

const connectDB = async ()=>{

    try {
        
        const connectionInstance = await mongoose.connect(`mongodb+srv://anirdina0101:Anirban123@cluster0.rsjc7jo.mongodb.net/hall_of_fame`)
        console.log('\nMongodb connected successfully : ' + connectionInstance.connection.host );
        

    } catch {
        console.log('Mongodb connection error' );
        throw new Error
    }

}

export default connectDB;