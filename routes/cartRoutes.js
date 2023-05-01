import express from "express";
import { addToCart, removeFromCart, AllCarts, deleteAllCarts, Acart} from "../controllers/cartController.js"

const router = express.Router();

router.post("/addtocart", addToCart);
router.post("/removefromcart", removeFromCart);
router.get("/allcarts", AllCarts);
router.delete("/deletecarts", deleteAllCarts);
router.get("/:id", Acart);



export default router