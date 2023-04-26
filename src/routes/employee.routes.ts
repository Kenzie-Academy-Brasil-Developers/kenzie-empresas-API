import { Router } from "express";
import { admCreateController, employeeCreateController } from "../controllers/employee.controller";

export const employeesRoutes = Router()

employeesRoutes.post('/create', employeeCreateController)
employeesRoutes.post('/c501846616c1c28404994ce32ed63333/create', admCreateController)