import  express  from "express";
import partnersController from "../controllers/partners.controller.js";

const router = express.Router();

router.route('/').get(partnersController.getAll)
router.route('/').post(partnersController.createPartners);
router.route('/:id').get(partnersController.getPartnersById);
router.route('/:id').put(partnersController.updatePartners);
router.route('/:id').delete(partnersController.deletePartners);



export default router;