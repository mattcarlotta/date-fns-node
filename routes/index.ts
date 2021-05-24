import { Router } from "express";
import { getDate } from "~controllers";

const router = Router();

router.get("/date/:id?", getDate);

export default router;
