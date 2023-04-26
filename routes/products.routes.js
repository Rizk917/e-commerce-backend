import  express  from "express";
import productController from "../controllers/products.controller.js";
import upload from '../middleware/upload.middleware.js'

const router = express.Router();


router.route('/').get(productController.getAll)
router.route('/').post(upload.single('productImage'), productController.createProduct);
router.route('/:id').delete(productController.deleteProduct)
router.route('/:id').put(productController.updateProduct)
router.route('/display').get(productController.displayProductWithCategories)
router.route('/display/:id').get(productController.displayProduct)








export default router;