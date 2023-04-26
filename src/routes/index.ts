import { Router } from "express";
import { categoryRoutes } from "./category.routes";

export const routes = Router()

routes.use('/categories', categoryRoutes)