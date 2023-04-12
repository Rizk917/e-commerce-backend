import express from "express";
import { addToCart, removeFromCart, AllCarts } from "../controllers/cartController.js"

const router = express.Router();

router.post("/addtocart", addToCart);
router.post("/removefromcart", removeFromCart);
router.get("/allcarts", AllCarts);


export default router