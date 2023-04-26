import { Router } from "express";
import { createCategoryController } from "../controllers/category.controller";

export const categoryRoutes = Router()

categoryRoutes.post('/create', createCategoryController)