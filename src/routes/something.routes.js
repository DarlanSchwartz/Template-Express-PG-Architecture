import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import SomethingController from "../controllers/something.controller.js";
import { SomethingSchema } from "../schemas/something.schemas.js";

const somethingRouter = Router();

somethingRouter.post('/create-something',validateSchema(SomethingSchema), SomethingController.create); 
somethingRouter.get('/get-something',SomethingController.get); 

export default somethingRouter;