import { Router } from "express";
import { getDate, viewHome } from "~controllers";

const router = Router();

router.get("/", viewHome);
router.get("/date/:id?", getDate);

export default router;
