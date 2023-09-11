import { Router } from "express";
import somethingRouter from "./something.routes.js";

const router = Router();
router.use(somethingRouter);
export default router;