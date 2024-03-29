import connectDB from './db/index.js'
import app from './app.js'
import { DATA } from './constants.js'


const PORT = DATA.port || 3000

connectDB()
.then(()=>{

    app.listen(PORT , ()=>{
        console.log(`Server is running at http://localhost:${PORT}`)
    })
    
})
.catch(()=>{
    console.log('Error connecting to database')
})