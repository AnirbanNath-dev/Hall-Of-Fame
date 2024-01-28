import express from "express";
import cors from "cors";
import User from "./models/User.model.js";
import { DATA } from "./constants.js";

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

app.delete('/admin' , async (req, res)=>{
    const password : string = req.body.password;
    const username : string = req.body.username;
    const id : string = req.body.id;


    if(password == DATA.password && username == DATA.username){

        await User.deleteOne({_id : id})

        res.json({
            success : true,
        })
        return
    } 
    res.json({
        success : false,
    })
})


export default app;