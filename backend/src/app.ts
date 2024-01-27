import express from "express";
import cors from "cors";
import User from "./models/User.model.js";

const app = express();

app.use(cors());

app.use(express.json());

app.post('/username' , async (req, res)=>{
    const username : string = req.body.username;

    try { 
    await User.create({
        username
    })

    res.json({
        message : `User :  ${username} created`
    })
    } catch {
        res.json({
            message : "error in posting data"
        })
    }

})

app.get('/usernames' , async (req, res)=>{
    try {
        const users = await User.find();
        res.json(users);
    } catch {
        res.json({
            message : "error in getting data"
        })
    }
})


export default app;