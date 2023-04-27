import { Router } from "express";
import { createCompanyController } from "../controllers/company.controller";
import { ensureAuth } from "../middlewares/ensureAuth";

export const companyRoutes = Router()

companyRoutes.use(ensureAuth)
companyRoutes.post('/create', createCompanyController)