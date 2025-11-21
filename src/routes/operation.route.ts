import { Router } from "express";
import { OperationController } from "../modules/operation/operation.controller";

const router = Router();
const operationController = new OperationController();

router.post("/adition", operationController.adition);
router.post("/substraction", operationController.substraction);
router.post("/product", operationController.product);
router.post("/division", operationController.division);

export default router;
