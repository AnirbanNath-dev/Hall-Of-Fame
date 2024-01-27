import dotenv from 'dotenv'

dotenv.config({
    path: '../.env'
})

const DATA = {
    mongodbUri : process.env.MONGODB_URI,
    port : process.env.PORT,
    dbName : process.env.DB_NAME
}

export { DATA }