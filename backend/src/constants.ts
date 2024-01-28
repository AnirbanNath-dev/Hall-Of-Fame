import dotenv from 'dotenv'

dotenv.config()

const DATA = {
    mongodbUri : process.env.MONGODB_URI,
    port : process.env.PORT,
    dbName : process.env.DB_NAME,
    username : process.env.USERNAME,
    password : process.env.PASSWORD
}

export { DATA }