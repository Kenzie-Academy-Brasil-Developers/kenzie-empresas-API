import { Router } from "express";
import { ensureAuth } from "../middlewares/ensureAuth";
import { createDepartmentController } from "../controllers/department.controller";

export const departmentRoutes = Router()

departmentRoutes.use(ensureAuth)
departmentRoutes.post('/create', createDepartmentController)