import  express  from "express";
import registerController from "../controllers/register.controller.js";

const router = express.Router();

router.route('/').get(registerController.getAll)
router.route('/').post(registerController.createRegister);
router.route('/:id').get(registerController.getRegisterById);
router.route('/:id').put(registerController.updateRegister);
router.route('/:id').delete(registerController.deleteRegister);



export default router;