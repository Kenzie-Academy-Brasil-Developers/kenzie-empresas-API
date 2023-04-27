import { Router } from "express";
import { createCategoryController } from "../controllers/category.controller";
import { ensureAuth } from "../middlewares/ensureAuth";

export const categoryRoutes = Router()

categoryRoutes.use(ensureAuth)
categoryRoutes.post('/create', createCategoryController)