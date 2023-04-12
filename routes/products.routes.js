import  express  from "express";
import productController from "../controllers/products.controller.js";
import displayProduct from "../controllers/products.controller.js"


const router = express.Router();


router.route('/').get(productController.getAll)
router.route('/').post(productController.createProduct)
router.route('/:id').delete(productController.deleteProduct)
router.route('/:id').put(productController.updateProduct)
router.route('/display').get(productController.displayProductWithCategories)
router.route('/display/:id').get(productController.displayProduct)








export default router;