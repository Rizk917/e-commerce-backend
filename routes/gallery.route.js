import  express  from "express";
import galleryController from "../controllers/gallery.controller.js";

const router = express.Router();

router.route('/').get(galleryController.getAll)
router.route('/').post(galleryController.createGallery);
router.route('/:id').get(galleryController.getGalleryById);
router.route('/:id').put(galleryController.updateGallery);
router.route('/:id').delete(galleryController.deleteGallery);



export default router;