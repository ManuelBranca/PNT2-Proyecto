import express from "express";
import { addProduct } from "../data/products.js";

const router = express.Router();

router.post("/addProduct", async(req,res) => {
    console.log("Entro al router addProduct")
    const result = await addProduct(req.body);
    res.send(result)
})

export default router;