import express from "express";
import { addUser } from "../data/users.js";

const router = express.Router();

router.post("/adduser", async (req,res)=>{
    console.log("Entro al router addUser")
    const result = await addUser(req.body);
    res.send(result)
})

export default router;