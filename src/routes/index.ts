import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { sessionRoutes } from "./session.routes";
import { employeesRoutes } from "./employee.routes";

export const routes = Router()

routes.use('/categories', categoryRoutes)
routes.use('/auth', sessionRoutes)
routes.use('/employees', employeesRoutes)